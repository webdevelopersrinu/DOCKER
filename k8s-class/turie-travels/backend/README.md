# India Travel Booking Platform — Backend

6 microservices, Node/Express + MongoDB (Mongoose), each independently
deployable with its own database. Covers flight/train/bus search across real
Indian cities, authentication, booking orchestration, payments, passenger
profiles, and notifications. Payments and SMS/email run in sandbox mode
(deterministic simulated outcomes) until a real gateway/provider is wired in —
everything else (auth, search, booking state, seat inventory) behaves like a
production system. No API gateway — routing by path is handled by the K8s
Ingress controller in the cluster; locally, each service is just called on
its own port.

| Service | Port | Mongo DB | Role |
|---|---|---|---|
| auth-service | 5001 | authdb | signup/login/JWT, OTP verification |
| catalog-service | 5002 | catalogdb | places + flights/trains/buses search & inventory |
| booking-service | 5003 | bookingdb | orchestrates booking → payment → notification |
| payment-service | 5004 | paymentdb | payment gateway (sandbox mode) |
| profile-service | 5005 | profiledb | saved passengers, preferences |
| notification-service | 5006 | notificationdb | email/SMS notifications |

Each service follows the same layered architecture: `routes → controllers →
services → repositories → models`, with Zod request validation, a global
error handler, and a consistent `{ success, data }` / `{ success, message }`
response envelope.

## Run locally (no Docker) — uses your existing local MongoDB

For each service: copy `.env.example` to `.env`, then install + run.

```bash
cd auth-service && npm install && npm run dev
cd catalog-service && npm install && npm run seed && npm run dev   # seed once to load places + trips
cd payment-service && npm install && npm run dev
cd notification-service && npm install && npm run dev
cd profile-service && npm install && npm run dev
cd booking-service && npm install && npm run dev
```

Run `npm run seed` in catalog-service once (or again to reset data) — it
populates `catalogdb.places` and `catalogdb.trips` from the Indian city list
and generated routes.

## Try it (hitting each service directly, by port)

```bash
# 1. signup
curl -X POST localhost:5001/api/v1/auth/signup -H "Content-Type: application/json" \
  -d '{"name":"Srinu","email":"srinu@test.com","phone":"9999999999","password":"pass123"}'
# -> { success: true, data: { token, user } }

# 2. search buses Hyderabad -> Vizianagaram
curl "localhost:5002/api/v1/buses/search?from=Hyderabad&to=Vizianagaram"

# 3. book (replace TOKEN and TRIP_ID from the search result's _id)
curl -X POST localhost:5003/api/v1/bookings -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"tripId":"TRIP_ID","passengers":[{"name":"Srinu","age":28,"gender":"M"}],"paymentMethod":"UPI"}'
```

Booking flow: booking-service reserves seats in catalog-service, charges
payment-service (declines only when the amount is an exact multiple of ₹1300
— deterministic, so both the success and decline paths are reproducible for
testing), then fires notification-service. On a declined payment the
reserved seats are released automatically.

## Run with Docker Compose

Each service connects to your **host's** local MongoDB via
`host.docker.internal` (no Mongo container is started — you already have one
running and tested).

```bash
docker compose up --build
```

## Deploying to EKS with an Ingress controller

Nothing in the service code changes — point the Ingress at each Service by
path prefix, e.g.:

```
/api/v1/auth(/|$)(.*)          -> auth-service:5001
/api/v1/(places|flights|trains|buses|trips) -> catalog-service:5002
/api/v1/bookings(/|$)(.*)      -> booking-service:5003
/api/v1/profile(/|$)(.*)       -> profile-service:5005
/api/v1/notifications(/|$)(.*)-> notification-service:5006
```

Don't expose `payment-service` on the Ingress — it's called only internally
by booking-service (`PAYMENT_SERVICE_URL`), never from outside the cluster.

Per service, only `MONGO_URI` and the inter-service URLs
(`CATALOG_SERVICE_URL`, `PAYMENT_SERVICE_URL`, `NOTIFICATION_SERVICE_URL` on
booking-service) change from `localhost`/`host.docker.internal` to in-cluster
Service DNS, e.g. `mongo.mongo-db.svc.cluster.local:27017` and
`catalog-service.<namespace>.svc.cluster.local`. Pass those as K8s
ConfigMap/Secret env vars — same pattern as your existing
`k8s-class/chat/k8s` manifests.
