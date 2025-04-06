#!/bin/bash

echo "🚀 Starting React frontend deployment..."

cd ~/app

# Install dependencies
npm install

# Build the React app
npm run build

# Move build to web server directory (e.g. /var/www/html)
sudo rm -rf /var/www/html/*
sudo cp -r build/* /var/www/html/

echo "✅ Deployment complete!"
    