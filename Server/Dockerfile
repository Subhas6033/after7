# After7 Backend

FROM node:22-alpine AS base

WORKDIR /app


# Dependencies
FROM base AS dependencies

COPY package.json package-lock.json ./

RUN npm ci


# Build
FROM dependencies AS build

COPY tsconfig.json ./
COPY index.ts server.ts ./
COPY src ./src

RUN npm run build


# Production dependencies
FROM base AS production-dependencies

COPY package.json package-lock.json ./

RUN npm ci --omit=dev \
    && npm cache clean --force


# Production
FROM base AS production

ENV NODE_ENV=production

WORKDIR /app

USER node

COPY \
    --from=production-dependencies \
    --chown=node:node \
    /app/node_modules \
    ./node_modules

COPY \
    --from=build \
    --chown=node:node \
    /app/dist \
    ./dist

COPY \
    --from=build \
    --chown=node:node \
    /app/package.json \
    ./package.json

EXPOSE 5000

CMD ["node", "dist/server.js"]