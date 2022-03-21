const express = require('express');

const categoriesController = require('../Controllers/categoriesControllers');

const router = express.Router();

const validateToken = require('../middlewares/validateToken');

router.post('/',
validateToken.tokenUser,
categoriesController.createCategory);

router.get('/', validateToken.tokenUser, categoriesController.getAllCategory);

module.exports = router;