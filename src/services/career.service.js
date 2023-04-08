const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Tool, ToolUser, User } = require('../models');
const { userService, toolService } = require('.');
const { calculateFrontend, calculateBackend, calculateFullStack, calculateDevOps } = require('../utils/calculations');

const getCareerMetrics = async (authId) => {
  const user = await userService.getUserById(authId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const res = await toolService.getUserTools(user._id)
  const tools = res.map(({experience, tool}) => ({
    name: tool.name,
    experience: experience
  }))

  const frontendResult = calculateFrontend(tools)
  const backendResult = calculateBackend(tools)
  const fullstackResult = calculateFullStack(frontendResult, backendResult)
  const devopsResult = calculateDevOps(tools)

 return {
  frontend: frontendResult,
  backend: backendResult,
  fullstack: fullstackResult,
  devops: devopsResult
 }
}

module.exports = {
  getCareerMetrics
}
