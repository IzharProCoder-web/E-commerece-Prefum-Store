const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
   password: Joi.string()
  .min(8) // increase from 4 to 8
  .max(100)
  .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase, one lowercase, one number and one special character'
  }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Bad Request ",
      error,
    });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
   password: Joi.string()
  .min(8) // increase from 4 to 8
  .max(100)
  .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase, one lowercase, one number and one special character'
  }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Bad Request ",
      error,
    });
  }
  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
