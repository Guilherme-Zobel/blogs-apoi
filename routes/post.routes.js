const express = require('express');

const postController = require('../Controllers/post');

const router = express.Router();

const validateUser = require('../middlewares/validateToken');

router.get('/',
validateUser.tokenUser, postController.getAllPosts);

router.get('/:id',
validateUser.tokenUser, postController.getPostById);

module.exports = router;