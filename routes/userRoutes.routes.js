const express = require('express');
const validateUser = require('../middlewares/validateUser');
const user = require('../Controllers/userController');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateUser.validateDisplayName,
validateUser.validateEmail, validateUser.validatePassword, user.createUser);

router.get('/', validateToken.tokenUser, user.getAllUser);
router.get('/:id', validateToken.tokenUser, user.getUserById);
  
module.exports = router;
