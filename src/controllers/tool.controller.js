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

const getUserTools = catchAsync(async (req, res) => {
  const result = await toolService.getUserTools(req.user._id);
  res.status(httpStatus.OK).send(result);
});

const getUserTool = catchAsync(async (req, res) => {
  const result = await toolService.getUserTool(req.params.toolId, req.user._id);
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
const uploadToolImage = catchAsync(async (req, res) => {
  const toolUploaded = await toolService.uploadToolImage(req.files);
  res.status(httpStatus.CREATED).send(toolUploaded);
});

const deleteFileImage = catchAsync(async (req, res) => {
  const toolDeleted = await toolService.deleteFileImage(req.params.toolId);
  res.status(httpStatus.NO_CONTENT).send();
});
module.exports = {
  createTool,
  getTools,
  getUserTools,
  getUserTool,
  getTool,
  deleteTool,
  updateTool,
  createUserTool,
  uploadToolImage,
  deleteFileImage
};
