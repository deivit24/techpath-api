const Joi = require('joi');

const calculate = {
  body: Joi.array().items(
    Joi.object().keys({
      name: Joi.string().required(),
      experience: Joi.number().required(),
      type: Joi.string().required().valid('FRONTEND', 'BACKEND', 'DATABASE', 'DEVOPS', 'QA'),
    })
  ),
};

module.exports = {
  calculate,
};
