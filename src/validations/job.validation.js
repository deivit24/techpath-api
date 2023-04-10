const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createJob = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    min: Joi.number(),
    max: Joi.number(),
    average: Joi.number(),
  }),
};

const updateJob = {
  params: Joi.object().keys({
    jobId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    min: Joi.number(),
    max: Joi.number(),
    average: Joi.number(),
  }),
};

const deleteJob = {
  params: Joi.object().keys({
    jobId: Joi.required().custom(objectId),
  })
};

const getJob = {
  params: Joi.object().keys({
    jobId: Joi.required().custom(objectId),
  })
};

module.exports = {
  createJob,
  updateJob,
  deleteJob,
  getJob
};
