const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { toolService } = require('../services');

const createTool = catchAsync(async (req, res) => {
  const tool = await toolService.createTool(req.body);
  res.status(httpStatus.CREATED).send(tool);
});

const getTools = catchAsync(async (req, res) => {
  const result = await toolService.getTools();
  res.status(httpStatus.OK).send(result);
});

const getTool = catchAsync(async (req, res) => {
  const result = await toolService.getTool(req.params.toolId);
  res.status(httpStatus.OK).send(result);
});

const updateTool = catchAsync(async (req, res) => {
  const tool = await toolService.updateToolById(req.params.toolId, req.body);
  res.send(tool);
});

const deleteTool = catchAsync(async (req, res) => {
  await toolService.deleteToolById(req.params.toolId);
  res.status(httpStatus.NO_CONTENT).send();
});
const createUserTool = catchAsync(async (req, res) => {
  const userTool = await toolService.createUserTool(req.body, req.params.toolId, req.user._id);
  res.status(httpStatus.CREATED).send(userTool);
});

module.exports = {
  createTool,
  getTools,
  getTool,
  deleteTool,
  updateTool,
  createUserTool,
};
