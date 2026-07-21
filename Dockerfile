FROM node:16.13.2-alpine@sha256:2f50f4a428f8b5280817c9d4d896dbee03f072e93f4e0c70b90cc84bd1fcfe0d as builder
WORKDIR /app
COPY src/package*.json ./
COPY src ./
RUN  npm ci

#------------------------------------

FROM node:16.13.2-alpine@sha256:2f50f4a428f8b5280817c9d4d896dbee03f072e93f4e0c70b90cc84bd1fcfe0d
WORKDIR /app
COPY src/package*.json ./
RUN npm install --production
COPY --from=builder /app/ .

# Expose the port the app runs in
ENV NODE_ENV=production
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
