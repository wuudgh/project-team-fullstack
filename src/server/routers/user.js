const express = require('express');
const {
    register,
    login
} = require('../controllers/user');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;

 /home/molloyconor511/Our_Team_Project/project-team-fullstack
