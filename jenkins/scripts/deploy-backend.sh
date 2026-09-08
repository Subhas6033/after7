set -e

echo "========================================"
echo "After7 Backend Deployment"
echo "========================================"

REPO_DIR="/opt/after7/repository"

cd "$REPO_DIR/Server"

echo "Building backend Docker image..."

docker build \
    -t after7-server:latest \
    .

echo "Stopping old backend..."

docker compose \
    -f docker-compose.prod.yml \
    down

echo "Starting new backend..."

DOCKER_IMAGE=after7-server:latest \
docker compose \
    -f docker-compose.prod.yml \
    up -d

echo "Removing unused Docker images..."

docker image prune -f

echo "Backend deployment completed."