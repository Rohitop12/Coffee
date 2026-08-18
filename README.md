# Brewed — Coffee That Earns Your Morning

> **Brewed** is a premium, Product Hunt-style homepage and discovery platform for a modern specialty coffee brand. Positioned as an accessible coffee experience platform, Brewed eliminates coffee pretentiousness while preserving craft quality.

---

## 🌟 Key Features

- **Editorial Homepage Design**: Inspired by modern product showcases (e.g. Fora.so), with spacious layout, editorial typography (`DM Sans` & `Inter`), and high-end visual polish.
- **Interactive Hero Packaging**: 3D hover interaction featuring product lift, rotation (+2.5°), dynamic shadow shift, and tasting note badge reveal.
- **Interactive Coffee Finder**: State-driven preference matcher ("What sounds good today?") that updates roast recommendations (*Smooth & chocolatey*, *Bright & fruity*, *Rich & bold*, *Sweet & balanced*) instantly without page reload.
- **Dynamic Coffee Collection**: Dynamic product cards powered by a Node.js/Express REST API and MongoDB, featuring origin tags, roast badges, flavor pills, and detail modal quick-view.
- **Resilient Offline Mode**: Seamless fallback to local static dataset if the MongoDB backend is offline or loading, ensuring zero-downtime reliability.
- **Interactive Brew Guide**: Step-by-step ritual guide (Grind, Brew, Enjoy) with live coffee/water/time recipe calculator for Pour Over, French Press, and Espresso.
- **Honest Brand Positioning**: Zero fake statistics, fake reviews, or inflated counts. Pure focus on product quality and simple morning rituals.
- **Mobile-First & Production-Ready**: Tested across viewports (320px, 390px, 768px, 1024px, 1440px) with responsive mobile drawer navigation, keyboard accessibility, and `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

### Frontend (`client/`)
- **React.js 18** (Vite 6)
- **Tailwind CSS 3** (Custom design tokens & palette)
- **Framer Motion 11** (Micro-interactions & scroll animations)
- **Lucide React** (Minimalist iconography)
- **Axios** (API service layer)

### Backend (`server/`)
- **Node.js** & **Express.js** (REST API)
- **MongoDB** & **Mongoose 8** (Database & ODM)
- **Cors** & **Dotenv** (Cross-origin resource sharing & configuration)

---

## 📁 Repository Structure

```text
brewed/
├── client/
│   ├── public/
│   │   └── images/              # Generated high-res visual assets
│   ├── src/
│   │   ├── components/          # Navbar, Hero, CoffeeFinder, CoffeeCollection, CoffeeCard, CoffeeModal, BrewGuide, etc.
│   │   ├── data/                # Static fallback dataset & brew recipes
│   │   ├── services/            # Axios API client layer with error handling
│   │   ├── pages/               # Home.jsx page wrapper
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │    font & CSS tokens
│   │   └── index.css            # Tailwind directives & custom scrollbars
│   ├── index.html               # Google Fonts & SEO meta tags
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
├── server/
│   ├── config/                  # MongoDB database connection helper
│   ├── controllers/             # Coffee controller (getAll, getById, create)
│   ├── models/                  # Mongoose Coffee schema
│   ├── routes/                  # Express REST routes
│   ├── seed.js                  # Database seed script for specialty coffees
│   ├── server.js                # Express app bootstrap & error middleware
│   ├── package.json
│   └── .env.example
├── README.md
└── .gitignore
```

---

## ⚙️ Environment Variables

### Frontend (`client/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (`server/.env`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/brewed
CLIENT_URL=http://localhost:5173
```

---

## 🚀 Quick Start (Local Development)

### 1. Clone & Install Dependencies

```bash
# Clone repository
git clone https://github.com/your-username/brewed-coffee.git
cd brewed-coffee/brewed

# Install Backend Dependencies
cd server
npm install

# Install Frontend Dependencies
cd ../client
npm install
```

### 2. Seed Database (Optional)

Make sure MongoDB daemon is running locally (or provide MongoDB Atlas URI in `server/.env`):

```bash
cd ../server
npm run seed
```

### 3. Run Servers

Start Backend API:
```bash
cd server
npm run dev
# Server running at http://localhost:5000
```

In a second terminal, start Frontend Dev Server:
```bash
cd client
npm run dev
# App running at http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/coffee` | Get all specialty coffee products |
| `GET` | `/api/coffee/:id` | Get single coffee roast details |
| `POST` | `/api/coffee` | Add new coffee roast |
| `GET` | `/api/health` | API service health check |

---

## ☁️ Deployment Guide

### Deploying Frontend to Vercel
1. Push `client` to GitHub or set Root Directory to `brewed/client` in Vercel project settings.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Add Environment Variable:
   - `VITE_API_URL`: `https://your-backend.onrender.com/api`

### Deploying Backend to Render
1. Create a Web Service on Render pointing to `brewed/server`.
2. Environment: `Node`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add Environment Variables:
   - `MONGODB_URI`: `mongodb+srv://<username>:<password>@cluster.mongodb.net/brewed`
   - `CLIENT_URL`: `https://brewed-coffee.vercel.app`
   - `PORT`: `5000`

---

## 📄 License

MIT © 2026 Brewed. Made for better mornings.
