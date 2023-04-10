const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Job } = require('../models');


/**
 * Create job
 * @param {object} jobBody
 * @param {<Job>} job
 * @returns {Promise<Job>}
 */
const createJob = async (jobBody) => {
  if (await Job.doesJobExist(jobBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Job with this name already exists');
  }
  return Job.create(jobBody);
};

/**
 * Get jobs
 * @returns {Promise<Job>}
 */
const getJobs = async () => {
  console.log("MADE IT TO SERVICE");
  return await Job.find();
};

/**
 * Get job by id
 * @param {ObjectId} jobId
 * @returns {Promise<Job>}
 */
const getJob = async (jobId) => {
  const job = await Job.findById(jobId);
  if (!job) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job not found');
  }
  return job;
};

/**
 * Update Job by id
 * @param {ObjectId} jobId
 * @param {Object} updateBody
 * @returns {Promise<Job>}
 */
const updateJobById = async (jobId, updateBody) => {
  const job = await getJob(jobId);
  Object.assign(job, updateBody);
  await job.save();
  return job;
};

/**
 * Delete job by id
 * @param {ObjectId} jobId
 * @returns {Promise<Job>}
 */
const deleteJobById = async (jobId) => {
  const job = await getJob(jobId);
  await job.remove();
  return job;
};
module.exports = {
  createJob,
  getJobs,
  getJob,
  updateJobById,
  deleteJobById
}
