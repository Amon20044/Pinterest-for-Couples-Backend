const express = require('express');
const cors = require('cors');
const { errorHandler } = require('../middlewares/errorHandler'); // Adjusted path
const routes = require('../routes/index'); // Adjusted path
const { createServer } = require('@vercel/node');

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
      origin: process.env.FRONTEND_URL || "http://localhost:5173", // Allow only frontend requests
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.get('/', (req, res) => {
    res.send("🚀 Hello Fam, I am Amon and this is API for my project!");
  });
app.use('/api', routes);

// Error handler middleware
app.use(errorHandler);

// Export as a serverless function
module.exports = createServer(app);
