const { BlogPost, User, Categorie } = require('../models');

const getAllPosts = async (_req, res) => {
  const getPosts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] } },
      {
        model: Categorie,
        as: 'categories',
        through: { attributes: [] } },
    ],
  });

  return res.status(200).json(getPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const getPost = await BlogPost.findOne({ where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] } },
      {
        model: Categorie,
        as: 'categories',
        through: { attributes: [] } },
    ],
  });

  if (!getPost) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(getPost);
};

module.exports = {
  getAllPosts,
  getPostById,
};