#!/bin/bash

set -e  # Exit immediately on error

echo "🚀 Starting deployment..."

cd ~/app

echo "📦 Installing dependencies..."
npm install

echo "🛠️  Building the app..."
npm run build

# Ensure build was successful
if [ ! -f "dist/index.html" ]; then
  echo "❌ Build failed. index.html not found."
  exit 1
fi

echo "🧹 Cleaning up node_modules and cache..."
rm -rf node_modules
npm cache clean --force
rm -rf ~/.npm
rm -rf ~/.cache

echo "📁 Deploying to Nginx..."
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

echo "✅ Deployment complete!"
