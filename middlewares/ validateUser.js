const joi = require('joi');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  const stringDisplayName = joi.string().required();
  const sazeDisplayName = joi.string().min(8).required();

  if (stringDisplayName.validate(displayName).error
    || sazeDisplayName.validate(displayName).error) {
      return res.status(400).json({ 
        message: '"displayName" length must be at least 8 characters long' });
  }

  return next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === undefined) return res.status(400).json({ message: '"email" is required' });
  
  if (!email) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  } 

  const emailFormat = joi.string().required().email();

  if (emailFormat.validate(email).error) {
    return res.status(400).json({ 
      message: '"email" must be a valid email' });
  }

  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) return res.status(400).json({ message: '"password" is required' });

  if (!password) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  const pass = joi.string().min(6).required();

  if (pass.validate(password).error) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  return next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};