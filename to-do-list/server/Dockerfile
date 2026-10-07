FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Default DB address for Docker Compose (service name "mongo").
# Can still be overridden at runtime with -e MONGO_URI=...
ENV MONGO_URI=mongodb://mongo:27017/todos

# Install prod dependencies first so this layer is cached between code changes
COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src

USER node
EXPOSE 5000

CMD ["node", "src/server.js"]
