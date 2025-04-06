#!/bin/bash

echo "🚀 Starting React frontend deployment..."

cd ~/app

# Install dependencies
npm install

# Build the React app
npm run build

if [ ! -d "dist" ]; then
  echo "❌ Build failed. 'dist/' directory not found."
  exit 1
fi

# Move build to web server directory (e.g. /var/www/html)
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/


echo "✅ Deployment complete!"
    