const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { calculateFrontend } = require('../utils/calculations');
const { Tool, ToolUser, User } = require('../models');
const { loginUserWithEmailAndPassword } = require('./auth.service');

/**
 * Create tool
 * @param {object} toolBody
 * @param {<User>} user
 * @returns {Promise<Tool>}
 */
const createTool = async (toolBody) => {
  if (await Tool.doesToolExist(toolBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Tool already exists, edit or delete tool');
  }
  return Tool.create(toolBody);
};

/**
 * Create user tool
 * @param {object} userToolBody
 * @param {<Tool>} toolId
 * @param {<User>} userId
 * @param {<User>} authId
 * @returns {Promise<ToolUser>}
 */
const createUserTool = async (userToolBody, toolId, userId, authId) => {
  if (authId != userId) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Cannot add tool to this user');
  }

  if (await ToolUser.doesUserToolExist(toolId, userId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User already has this tool');
  }
  userToolBody.user = userId;
  userToolBody.tool = toolId;
  return ToolUser.create(userToolBody);
};

/**
 * Get tools
 * @returns {Promise<Tool>}
 */
const getTools = async () => {
  const tools = await Tool.find();
  return tools;
};

const getUserTools = async (userId) => {
  const tools = await ToolUser.find({ user: userId });
  return tools;
};
module.exports = {
  createTool,
  getTools,
  createUserTool,
};
