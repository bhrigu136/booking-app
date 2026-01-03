# 🏟️ Resort Booking Application

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to view available time slots for a Resort and book them instantly.

## 🚀 Features
- **View Availability:** Real-time display of available and booked time slots.
- **Instant Booking:** Users can book a slot with a single click.
- **Responsive Design:** Built with Tailwind CSS for a clean, mobile-friendly UI.
- **REST API:** robust backend to handle booking logic and data persistence.

## 🛠️ Tech Stack
- **Frontend:** React (Vite), Tailwind CSS v4
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### 1. Backend Setup
The backend runs on port `5000`.

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Seed the database (Run this once to create initial slots)
node seed.js

# Start the server
node index.js


*Console output should show:* `✅ MongoDB connected`

### 2. Frontend Setup

The frontend runs on port `5173`.

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev

```

*Access the app at:* `https://booking-app-zeta-one.vercel.app/`

---

## 📡 API Endpoints

| Method | Endpoint | Description | Body Parameters |
| --- | --- | --- | --- |
| `GET` | `/slots` | Fetches all time slots | None |
| `POST` | `/slots/book` | Books a specific slot | `{ "slotId": "..." }` |

---

## 📂 Project Structure

```
├── backend/
│   ├── models/       # Mongoose Schemas (Slot.js)
│   ├── routes/       # API Routes
│   ├── index.js      # Server entry point
│   └── seed.js       # Script to populate dummy data
├── frontend/
│   ├── src/
│   │   ├── components/ # SlotCard, SlotGrid
│   │   ├── pages/      # Home.jsx
│   │   └── api.js      # API fetcher functions
│   └── postcss.config.js
└── README.md

```

---

## 📝 Challenges & Solutions

**Challenge: Tailwind CSS v4 Configuration**

* **Issue:** The latest Tailwind v4 requires a specific PostCSS adapter which caused the styling to break initially.
* **Solution:** I installed `@tailwindcss/postcss` and updated the `postcss.config.js` to bridge the compatibility gap between Vite and the new Tailwind version.

**Challenge: State Management**

* **Issue:** Ensuring the UI updates immediately after a booking without a full page refresh.
* **Solution:** Implemented `useEffect` to fetch data on mount and triggered a re-fetch function immediately after a successful `POST` request to keep the UI in sync with the database.

