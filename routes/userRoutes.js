const express = require('express');
// const auth = require('../middleware/auth.js');
const validateUser = require('../middlewares/ validateUser');
const user = require('../Controllers/userController');

const router = express.Router();

router.post('/', validateUser.validateDisplayName,
validateUser.validateEmail, validateUser.validatePassword, user.createUser);
  
module.exports = router;
