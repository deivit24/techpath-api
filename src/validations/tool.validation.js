const Joi = require('joi');
const { objectId } = require('./custom.validation');
const { toolTypes } = require('../config/tools');

const createTool = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    imageUrl: Joi.string(),
    type: Joi.array().items(Joi.string().required().valid(toolTypes.FRONTEND, toolTypes.BACKEND, toolTypes.DEVOPS)),
  }),
};
const createUserTool = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    toolId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    experience: Joi.number().required(),
  }),
};

module.exports = {
  createTool,
  createUserTool,
};
