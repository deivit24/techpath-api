const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { jobService } = require('../services');

const createJob = catchAsync(async (req, res) => {
  const job = await jobService.createJob(req.body)
  res.status(httpStatus.CREATED).send(job);
});

const getJobs = catchAsync(async (req, res) => {
  console.log("MADE IT TO controller");
  const result = await jobService.getJobs();
  res.status(httpStatus.OK).send(result);
});

const getJob = catchAsync(async (req, res) => {
  const result = await jobService.getJob(req.params.jobId);
  res.status(httpStatus.OK).send(result);
});

const updateJob = catchAsync(async (req, res) => {
  const job = await jobService.updateJobById(req.params.jobId, req.body);
  res.send(job);
});

const deleteJob = catchAsync(async (req, res) => {
  await jobService.deleteJobById(req.params.jobId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob
};
