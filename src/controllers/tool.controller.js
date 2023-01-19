const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { toolService } = require('../services');

const createTool = catchAsync(async (req, res) => {
  const tool = await toolService.createTool(req.body);
  res.status(httpStatus.CREATED).send(tool);
});

const createUserTool = catchAsync(async (req, res) => {
  const userTool = await toolService.createUserTool(req.body, req.params.toolId, req.params.userId, req.user._id);
  res.status(httpStatus.CREATED).send(userTool);
});

const getTools = catchAsync(async (req, res) => {
  const result = await toolService.getTools();
  res.status(httpStatus.OK).send(result);
});

module.exports = {
  createTool,
  getTools,
  createUserTool,
};
