
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler'); 
const routes = require('./routes/index'); 
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("🚀 Hello Fam, I am Amon and this is API for my project!");
});
app.use('/api', routes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(3000, () => {
  console.log("server is running.. 3000");
});

module.exports = app;
