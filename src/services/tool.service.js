const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Tool, ToolUser } = require('../models');
const { uploadFile, deleteFile } = require('../utils/s3');

/**
 * Create tool
 * @param {object} toolBody
 * @param {<Tool>} tool
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
const createUserTool = async (userToolBody, toolId, authId) => {
  if (await ToolUser.doesUserToolExist(toolId, authId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User already has this tool');
  }
  userToolBody.user = authId;
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

/**
 * Get tool by id
 * @param {ObjectId} toolId
 * @returns {Promise<Tool>}
 */
const getTool = async (toolId) => {
  const tool = await Tool.findById(toolId);
  if (!tool) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tool not found');
  }
  return tool;
};

/**
 * Update tool by user id
 * @param {ObjectId} toolId
 * @param {Object} updateBody
 * @returns {Promise<Tool>}
 */
const updateToolById = async (toolId, updateBody) => {
  const tool = await getTool(toolId);
  Object.assign(tool, updateBody);
  await tool.save();
  return tool;
};

/**
 * Delete tool by id
 * @param {ObjectId} toolId
 * @returns {Promise<Tool>}
 */
const deleteToolById = async (toolId) => {
  const tool = await getTool(toolId);
  await tool.remove();
  return tool;
};

const getUserTools = async (userId) => {
  const tools = await ToolUser.find({ user: userId }).populate('tool', 'name color');
  return tools;
};

const getUserTool = async (toolId, userId) => {
  const tool = await ToolUser.findOne({ user: userId, tool: toolId }).populate('tool');
  return tool;
};

const uploadToolImage = async (file) => {
  const aws_url = await uploadFile(file);
  return { imageUrl: aws_url };
};

const deleteFileImage = async (toolId) => {
  const tool = await getTool(toolId);
  const success = await deleteFile(tool.key());

  return { message: success };
};
module.exports = {
  createTool,
  getTool,
  updateToolById,
  getTools,
  getUserTools,
  getUserTool,
  deleteToolById,
  createUserTool,
  uploadToolImage,
  deleteFileImage
};
