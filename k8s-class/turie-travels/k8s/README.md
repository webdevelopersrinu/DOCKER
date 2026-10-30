# Deploying turie-travels to EKS (srinu-desetti-eks)

Run all of this from the Ubuntu bastion box, from the `turie-travels` repo
root (so relative `k8s/...` paths resolve), with `kubectl`/`eksctl` already
pointed at `srinu-desetti-eks` (ap-south-1).

## 0. metrics-server (required for the HPAs to do anything)

Every Deployment in `10-*.yaml` through `20-frontend.yaml` ships an HPA that
scales on CPU. Without metrics-server they just sit there unable to read CPU
usage.

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

This usually just works on EKS. If `kubectl top nodes` or `kubectl top pods`
shows `<unknown>` after a minute or two, it's almost always the kubelet's
self-signed cert tripping metrics-server's TLS verification — patch it to
skip that check:

```bash
kubectl patch deployment metrics-server -n kube-system --type='json' \
  -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'
```

## 1. Build and push the Docker images

```bash
./k8s/build-and-push.sh
```

Run this before any `kubectl apply` below — it builds and pushes all 7
images (6 backend services + frontend) that the manifests reference.

## 2. Namespaces

```bash
kubectl apply -f k8s/00-namespaces.yaml
```

## 3. JWT secret

Edit `k8s/05-secrets.yaml` and replace `PASTE_A_REAL_RANDOM_SECRET_HERE`
with a real value:

```bash
openssl rand -base64 32
```

Then:

```bash
kubectl apply -f k8s/05-secrets.yaml
```

## 4. Backend services + frontend

Explicit order (namespaces and the secret must already exist):

```bash
kubectl apply -f k8s/10-auth-service.yaml
kubectl apply -f k8s/11-catalog-service.yaml
kubectl apply -f k8s/12-payment-service.yaml
kubectl apply -f k8s/13-notification-service.yaml
kubectl apply -f k8s/14-profile-service.yaml
kubectl apply -f k8s/15-booking-service.yaml
kubectl apply -f k8s/20-frontend.yaml
```

Once you're comfortable with the above, the filenames are numbered so
`kubectl apply` on the whole directory applies them in the same order —
this is the recommended way day-to-day, as long as `00-` and `05-` have
already been applied at least once:

```bash
kubectl apply -f k8s/
```

## 5. Seed the catalog

`11-catalog-service.yaml` includes a one-shot Job (`catalog-seed`) that
loads places/trips data. Confirm it completed:

```bash
kubectl get jobs -n turie-backend
kubectl logs job/catalog-seed -n turie-backend
```

Jobs aren't idempotent on re-apply — if you need to re-seed, delete it
first:

```bash
kubectl delete job catalog-seed -n turie-backend
kubectl apply -f k8s/11-catalog-service.yaml
```

## 6. NetworkPolicies

```bash
kubectl apply -f k8s/30-networkpolicy-backend.yaml -f k8s/31-networkpolicy-frontend.yaml
```

Caveat already noted in both files: on EKS with the default VPC CNI,
NetworkPolicies are silently ignored unless you either set
`ENABLE_NETWORK_POLICY=true` on the `aws-node` DaemonSet or install Calico —
one of those two is required for these to actually take effect.

## 7. ingress-nginx controller (NodePort)

Install `helm` if you don't have it yet:

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

Install the controller with its Service forced to `NodePort` (no AWS Load
Balancer Controller on this cluster):

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm upgrade --install ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx --create-namespace \
  --set controller.service.type=NodePort
```

Find the NodePort that got assigned for port 80:

```bash
kubectl get svc -n ingress-nginx ingress-nginx-controller -o jsonpath='{.spec.ports[0].nodePort}'
```

Open this port in the worker nodes' security group — same pattern as
`chat/k8s/20-frontend.yaml`'s fixed `nodePort: 30080`, except here the port
is whatever Helm/Kubernetes assigned above (NodePorts are allocated from the
30000-32767 range unless you pin one).

## 8. Ingress resources

```bash
kubectl apply -f k8s/40-ingress.yaml
```

## 9. Verify

```bash
kubectl get pods -A
kubectl get ingress -A
```

Then, replacing `<NODE_IP>` with any worker node's public IP and
`<NODEPORT>` with the port from step 7:

```bash
curl "http://<NODE_IP>:<NODEPORT>/api/v1/catalog/places?q=Hyderabad"
curl "http://<NODE_IP>:<NODEPORT>/"
```

The first should return catalog-service's JSON search results; the second
should return the frontend's `index.html` — both through the same Ingress
controller and port.

## Why namespaces + NetworkPolicy + Ingress, not just a NodePort per service

Two namespaces (`turie-backend`/`turie-frontend`) plus default-deny
NetworkPolicies mean each service is only reachable from exactly where it
needs to be reachable from, instead of every pod being able to talk to
every other pod by default. Routing everything through one Ingress
controller means there's a single external entry point and a single port to
open in the security group, instead of punching one NodePort hole per
microservice (7 ports, 7 holes) and hoping nothing gets exposed by mistake.
This is the same shape production clusters use — it just happens to also be
less to manage.
