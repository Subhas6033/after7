set -e

echo "========================================"
echo "After7 Health Check"
echo "========================================"

echo "Checking backend..."

curl \
    --fail \
    --silent \
    --show-error \
    http://localhost:6866/health

echo ""

echo "Backend is healthy."

echo "Checking frontend..."

curl \
    --fail \
    --silent \
    --show-error \
    http://localhost:3000

echo ""

echo "Frontend is healthy."

echo "========================================"
echo "Health check passed"
echo "========================================"