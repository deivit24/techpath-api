const Joi = require('joi');
const { toolTypes } = require('../config/tools');

const createTool = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    experience: Joi.number().required(),
    type: Joi.string().required().valid(toolTypes.FRONTEND, toolTypes.BACKEND, toolTypes.DEVOPS),
  }),
};

const getTools = {
  query: Joi.object().keys({
    name: Joi.string().required(),
    experience: Joi.number().required(),
    type: Joi.string().required().valid(toolTypes.FRONTEND, toolTypes.BACKEND, toolTypes.DEVOPS),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  createTool,
  getTools,
};
