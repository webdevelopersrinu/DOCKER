# Deploying the To-Do App

## Architecture (Docker Compose)

```
                         ┌────────────────────── todo-net (bridge network) ─┐
Browser ──:80──> client  │  nginx: serves React build,                      │
                         │  proxies /api/* ──> server:5000                  │
                         │                       │                          │
                         │                 server (Express)                 │
                         │                       │ MONGO_URI               │
                         │                 mongo:27017 ── mongo_data volume │
                         └──────────────────────────────────────────────────┘
```

- All three containers share one custom bridge network (`todo-net`) and reach
  each other by **service name** (`mongo`, `server`, `client`).
- Only the client's port 80 is published to the host. The API and database are
  reachable **only inside the Docker network** — nginx proxies `/api/*` to the
  server, so the browser talks to a single origin and CORS never fires.
- MongoDB data lives in the named volume `mongo_data`, so it **survives**
  `docker compose down` and container rebuilds. (Only `docker compose down -v`
  deletes it.)
- Locally without Docker, the server still falls back to a temporary in-memory
  MongoDB when `MONGO_URI` is not set.

## Run locally with Docker

```bash
cd to-do-list
docker compose up -d --build   # build + start everything
docker compose ps              # check status
docker compose logs -f server  # tail backend logs
```

Open http://localhost — the app, API, and DB are all running.

```bash
docker compose down            # stop (data kept in volume)
docker compose down -v         # stop AND delete database data
```

## Deploy to AWS (EC2 — simplest path)

### 1. Launch an EC2 instance

- AMI: Ubuntu Server 24.04 LTS, type: `t3.small` (t2/t3.micro works for a demo).
- Key pair: create/download one (`.pem`) for SSH.
- Security Group rules:
  - SSH `22` — only **My IP**
  - HTTP `80` — `0.0.0.0/0`
  - (HTTPS `443` — `0.0.0.0/0` if you add TLS later)
  - Do **not** open 5000 or 27017 — they stay private inside Docker.
- Optional: allocate an **Elastic IP** and associate it, so the IP survives
  instance restarts.

### 2. Install Docker on the instance

```bash
ssh -i key.pem ubuntu@<EC2_PUBLIC_IP>

curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker ubuntu
exit   # log out/in so the group applies
```

### 3. Get the code onto the instance

```bash
# either clone
git clone <your-repo-url>
# or copy from your machine
scp -i key.pem -r ./to-do-list ubuntu@<EC2_PUBLIC_IP>:~/
```

### 4. Start it

```bash
cd to-do-list
docker compose up -d --build
docker compose ps
```

Open `http://<EC2_PUBLIC_IP>` — done. `restart: unless-stopped` brings the
containers back automatically if the instance reboots.

### 5. Updating after code changes

```bash
git pull            # or scp the changed files
docker compose up -d --build   # rebuilds only what changed
```

### Recommended hardening (when it's more than a demo)

- **TLS/domain**: point a domain at the Elastic IP, then either put the app
  behind an Application Load Balancer + ACM certificate, or add a
  Caddy/Certbot container for Let's Encrypt.
- **Mongo auth**: set `MONGO_INITDB_ROOT_USERNAME/PASSWORD` on the mongo
  service and credentials in `MONGO_URI` (keep them in a `.env` file next to
  `docker-compose.yml`, never committed).
- **Backups**: `docker exec todo-mongo mongodump` on a cron, synced to S3.

## Managed AWS alternative (production-grade)

When you outgrow a single EC2 box:

| Piece     | Service                                                   |
| --------- | --------------------------------------------------------- |
| Frontend  | S3 bucket + CloudFront (static React build, CDN + HTTPS)  |
| Backend   | ECR (image registry) + ECS Fargate (runs the container)   |
| Database  | DocumentDB (Mongo-compatible) or MongoDB Atlas on AWS     |
| Routing   | Application Load Balancer in front of ECS                 |

Flow: `docker build` → `docker push` to ECR → ECS service pulls and runs it →
ALB routes traffic; frontend calls the ALB URL (set `VITE_API_URL` build arg).
More moving parts and cost — start with EC2 + Compose, move here when needed.
