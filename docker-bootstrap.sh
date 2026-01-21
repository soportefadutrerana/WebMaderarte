#!/bin/sh

# Exit immediately if a command exits with a non-zero status
set -e

echo "Waiting for database to be ready..."
# Wait for the database to be reachable
until nc -z db 5432; do
  echo "Database is unavailable - sleeping"
  sleep 1
done
echo "Database is up!"

echo "Syncing database schema..."
./node_modules/prisma/build/index.js db push

echo "Starting the application..."
node server.js
