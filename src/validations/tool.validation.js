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

const getTool = {
  params: Joi.object().keys({
    toolId: Joi.string().custom(objectId),
  }),
};

const deleteTool = {
  params: Joi.object().keys({
    toolId: Joi.string().custom(objectId),
  }),
};

const updateTool = {
  params: Joi.object().keys({
    toolId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
      imageUrl: Joi.string(),
      color: Joi.string(),
      type: Joi.array().items(Joi.string().valid(toolTypes.FRONTEND, toolTypes.BACKEND, toolTypes.DEVOPS)),
    })
    .min(1),
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
  getTool,
  updateTool,
  createUserTool,
  deleteTool,
};
