const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { User } = require('../models');

const tokenUser = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findOne({ where: { email: decoded.data } });
      req.user = user;
    } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next();
};

module.exports = {
  tokenUser,
};