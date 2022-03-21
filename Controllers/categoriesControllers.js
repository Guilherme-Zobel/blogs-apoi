const { Categorie } = require('../models');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(`aqui está o resultado ${name}`);
    
    if (!name) return res.status(400).json({ message: '"name" is required' });

    const newCategory = await Categorie.create({ name });
    return res.status(201).json(newCategory);
  } catch (e) {
    next(e);
  }
};

const getAllCategory = async (req, res, next) => {
  try {
    const allCategory = await Categorie.findAll();
    return res.status(200).json(allCategory);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createCategory,
  getAllCategory,
};