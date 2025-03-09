const express = require('express');
const authRoutes = require('./authRoutes');
const albumRoutes = require('./albumRoutes');
const mediaRoutes = require('./mediaRoutes');

const router = express.Router();
console.log('router');
router.use('/auth', authRoutes);
router.use('/albums', albumRoutes);
router.use('/media', mediaRoutes);

module.exports = router;
