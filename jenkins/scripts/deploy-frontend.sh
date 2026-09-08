#!/bin/bash

set -e

echo "========================================"
echo "After7 Frontend Deployment"
echo "========================================"

REPO_DIR="/opt/after7/repository"

cd "$REPO_DIR/Client"

echo "Building frontend Docker image..."

docker build \
    -t after7-client:latest \
    .

echo "Stopping old frontend..."

docker rm \
    -f after7-client \
    2>/dev/null || true

echo "Starting new frontend..."

docker run \
    -d \
    --name after7-client \
    --restart always \
    -p 3000:3000 \
    after7-client:latest

echo "Removing unused Docker images..."

docker image prune -f

echo "Frontend deployment completed."