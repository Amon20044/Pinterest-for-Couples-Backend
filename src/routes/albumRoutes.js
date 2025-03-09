const express = require('express');
const { createNewAlbum, getUserAlbums } = require('../controllers/albumController');
const { authenticateUser } = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to create a new album
router.post('/create',authenticateUser, createNewAlbum);

// Route to get albums by user ID
router.get('/:id',authenticateUser, getUserAlbums);
module.exports = router;
