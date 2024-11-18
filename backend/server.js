import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'; // Adjust path as necessary
import connectDb from './config/ConnectDb.js'; // Adjust path as necessary

// Initialize Express
const app = express();
dotenv.config();

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Server Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));