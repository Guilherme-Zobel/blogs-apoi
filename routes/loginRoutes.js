const express = require('express');

const login = require('../Controllers/loginController');

const router = express.Router();

const validateUser = require('../middlewares/validateUser');

router.post('/',
validateUser.validateEmail,
validateUser.validatePassword, login.loginService);

module.exports = router;