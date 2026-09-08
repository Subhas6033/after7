set -e

echo "========================================"
echo "After7 Rollback"
echo "========================================"

REPO_DIR="/opt/after7/repository"

cd "$REPO_DIR"

echo "Available recent commits:"

git log \
    --oneline \
    -10

echo ""

echo "Rolling back one commit..."

git reset \
    --hard \
    HEAD~1

echo "Repository rolled back."

echo "Redeploying backend..."

cd "$REPO_DIR/Server"

docker compose \
    -f docker-compose.prod.yml \
    up -d \
    --build

echo "Rollback completed."