# 📊 User Analytics Platform

A full-stack analytics platform built using the **MERN Stack** that tracks user interactions on websites and provides an analytics dashboard similar to Microsoft Clarity, Mixpanel, and Hotjar.

The platform records user sessions, page visits, clicks, and user journeys while providing visual analytics such as session timelines and heatmaps.

---

# ✨ Features

## 📈 Dashboard

- Total Sessions
- Total Events
- Total Clicks
- Unique Pages
- Interactive Event Analytics Chart
- Recent Sessions Overview

---

## 👤 Session Tracking

- Unique Session Generation
- Session Timeline
- User Journey
- Event History
- Session Details

---

## 🔥 Heatmap

- Click Heatmap
- Page-wise Heatmap
- Dynamic Page Selector
- Click Density Visualization

---

## 📊 Event Tracking

Tracks

- Page Views
- Mouse Clicks
- User Sessions

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Framer Motion
- Lucide React
- Recharts

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# 📂 Project Structure

```
user-analytics-platform
│
├── client
│   ├── src
│   │
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── services
│   ├── utils
│   ├── App.jsx
│   └── main.jsx
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── tracker
│   ├── utils
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/<your-username>/user-analytics-platform.git

cd user-analytics-platform
```

---

# Backend Setup

Go to backend folder

```bash
cd server
```

Install packages

```bash
npm install
```

Create

```
.env
```

Inside

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:5173
```

Run backend

```bash
npm run dev
```

Server starts on

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal

```bash
cd client
```

Install packages

```bash
npm install
```

Create

```
.env
```

Inside

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

Application starts on

```
http://localhost:5173
```

---

# MongoDB Setup

Install MongoDB locally

or

Create a free MongoDB Atlas cluster.

Update

```
MONGO_URI
```

inside

```
server/.env
```

---

# Environment Variables

## Backend

```env
PORT=5000

MONGO_URI=your_db_URI

CLIENT_URL=http://localhost:5173
```

---

## Frontend

```env
VITE_API_URL=http://localhost:5173
```

---

# API Endpoints

## Dashboard

| Method | Endpoint                      |
| ------ | ----------------------------- |
| GET    | /api/dashboard/summary        |
| GET    | /api/dashboard/chart          |
| GET    | /api/dashboard/pages          |
| GET    | /api/dashboard/heatmap?page=/ |

---

## Sessions

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/sessions     |
| GET    | /api/sessions/:id |

---

## Events

| Method | Endpoint    |
| ------ | ----------- |
| POST   | /api/events |

# Tracker

Include the tracker script inside any website.

```html
<script src="tracker.js"></script>
```

or

```javascript
import Tracker from "./tracker";

Tracker.init();
```

The tracker automatically records

- Page Views
- Click Events
- Session IDs

Run Tracker

```bash
cd tracker
python -m http.server 5500
```

tracker runs on

```
http://localhost:5500
```
