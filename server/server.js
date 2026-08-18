import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import coffeeRoutes from './routes/coffeeRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// CORS configuration
app.use(cors({
  origin: [CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    brand: 'Brewed — Coffee That Earns Your Morning',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/coffee', coffeeRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.originalUrl}`,
  });
});

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(`[Server Error] ${err.stack}`);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Connect Database & Start Express Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[Brewed Server] Running on port ${PORT}`);
    console.log(`[Brewed Server] Health check: http://localhost:${PORT}/api/health`);
    console.log(`[Brewed Server] Coffee API: http://localhost:${PORT}/api/coffee`);
  });
});
