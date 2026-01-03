#!/bin/bash

echo "🚀 Creating Booking App project structure..."

# Frontend structure
mkdir -p frontend/src/components
mkdir -p frontend/src/pages

touch frontend/src/components/SlotCard.jsx
touch frontend/src/components/SlotGrid.jsx
touch frontend/src/pages/Home.jsx
touch frontend/src/App.jsx
touch frontend/src/main.jsx
touch frontend/src/api.js
touch frontend/index.html
touch frontend/tailwind.config.js

# Backend structure
mkdir -p backend/models
mkdir -p backend/routes

touch backend/models/Slot.js
touch backend/routes/slots.js
touch backend/index.js
touch backend/package.json

# Root files
touch README.md

echo "✅ Project structure created successfully!"
