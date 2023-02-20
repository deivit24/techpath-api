const Joi = require('joi');
const { password, objectId } = require('./custom.validation');
const learningTypes = {
  BOOTCAMP: 'Bootcamp',
  CSDEGREE: 'C.S. Degree',
  SELFTAUGHTFREE: 'Self-taught Free',
  ONLINEPAID: 'Online Paid Courses',
};
const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const updateUserSettings = {
  body: Joi.object().keys({
    darkMode: Joi.boolean(),
    private: Joi.boolean(),
    student: Joi.boolean(),
    employed: Joi.boolean(),
    currentTitle: Joi.string().allow(''),
    currentCompensation: Joi.number().allow(null),
    language: Joi.string().valid('ENGLISH', 'SPANISH'),
    github: Joi.string().allow(''),
    linkedin: Joi.string().allow(''),
    firstName: Joi.string().allow(''),
    lastName: Joi.string().allow(''),
    bio: Joi.string().allow(''),
    learningMethod: Joi.string().valid(
      learningTypes.BOOTCAMP,
      learningTypes.CSDEGREE,
      learningTypes.SELFTAUGHTFREE,
      learningTypes.ONLINEPAID
    ),
    avatar: Joi.string(),
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateUserSettings
};
