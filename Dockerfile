FROM node:16.13.2-alpine as builder
WORKDIR /app
COPY src/package*.json ./
COPY src ./
RUN  npm ci

#------------------------------------

FROM node:16.13.2-alpine
WORKDIR /app
COPY src/package*.json ./
RUN npm install --production
COPY --from=builder /app/ .

# Expose the port the app runs in
ENV NODE_ENV=production
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
