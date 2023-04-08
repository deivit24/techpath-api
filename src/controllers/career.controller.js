const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { careerService } = require('../services');


const getCareerMetrics = catchAsync(async (req, res) => {
  const result = await careerService.getCareerMetrics(req.user._id);
  res.status(httpStatus.OK).send(result);
});


module.exports = {
  getCareerMetrics
};
