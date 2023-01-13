const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { toolService } = require('../services');

const createTool = catchAsync(async (req, res) => {
  const scores = await toolService.createTool(req.body, req.user);
  res.status(httpStatus.CREATED).send(scores);
});
const getTools = catchAsync(async (req, res) => {
  const result = await toolService.getTools(req.user);
  res.status(httpStatus.OK).send(result);
});
module.exports = {
  createTool,
  getTools,
};
