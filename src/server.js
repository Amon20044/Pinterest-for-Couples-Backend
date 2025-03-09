const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler'); 
const routes = require('./routes/index'); 

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;
