const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  try {
    const findAllUsers = await User.findAll({ where: { email } });
    if (findAllUsers.length) return res.status(409).json({ message: 'User already registered' });

    await User.create({ displayName, email, password, image });

    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };

    const payload = {
      data: { displayName, email, image },
    };
    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

    return res.status(201).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createUser,
}; 