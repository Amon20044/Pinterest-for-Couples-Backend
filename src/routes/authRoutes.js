const express = require('express');
const { registerUser,loginUser, getUserBy_ID } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserBy_ID);

module.exports = router;
