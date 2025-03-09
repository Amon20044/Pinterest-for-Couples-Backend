const express = require('express');
const { upload, uploadMedia, getAlbumMedia , getUserMedia} = require('../controllers/mediaController');
const { authenticateUser } = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to upload media
router.post('/upload/:album_id', authenticateUser, upload.single('file'), uploadMedia);

// Route to fetch media by album ID
router.get('/:album_id', authenticateUser, getAlbumMedia);

router.get('/images/:user_id',authenticateUser, getUserMedia )

module.exports = router;
