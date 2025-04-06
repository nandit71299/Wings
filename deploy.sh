#!/bin/bash

echo "🚀 Starting deployment..."

# Navigate to the app directory
cd ~/app

# Optional: install/update dependencies
npm install

# Optional: build step
# npm run build

# Restart server (example using PM2)
pm2 restart app || pm2 start npm --name "app" -- start

echo "✅ Deployment complete!"
