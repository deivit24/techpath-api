const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { calculateFrontend } = require('../utils/calculations');
const { Tool, User } = require('../models');
const { loginUserWithEmailAndPassword } = require('./auth.service');

/**
 * Create tool
 * @param {object} toolBody
 * @param {<User>} user
 * @returns {Promise<Tool>}
 */
const createTool = async (toolBody, user) => {
  if (await Tool.doesToolExist(toolBody.name, user._id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Tool already exists, edit or delete tool');
  }
  toolBody.user = user._id;
  return Tool.create(toolBody);
};

const getTools = async (user) => {
  const tools = await Tool.find({ user: user._id });
  return tools;
};
module.exports = {
  createTool,
  getTools,
};
