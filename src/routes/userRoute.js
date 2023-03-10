const express = require('express');
const router = express.Router();
const {register,login,validate} = require('../controllers/userController');

router.post('/register',register);
router.post('/login',login)
router.post("/validateToken",validate)

module.exports = {userRoute : router}
