const httpStatus = require('http-status');
const { User, UserSettings } = require('../models');
const ApiError = require('../utils/ApiError');
const { uploadFile, deleteFile } = require('../utils/s3');
const AVATARS = 'avatars'
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return User.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

const getUserSettings = async (authId, fields ='-id') => {
  const user = await getUserById(authId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

 const userSettings = await UserSettings.findOne({user:authId}).select(fields)
 if (!userSettings) {
  return UserSettings.create({user: authId})
 }
 return userSettings
}

const updateUserSettings = async (updateBody, authId) => {
  const userSettings = await UserSettings.findOne({user:authId})
  Object.assign(userSettings, updateBody);
  await userSettings.save();
  return userSettings
}

const uploadAvatar = async (file, authId) => {
  const aws_url = await uploadFile(file, AVATARS );
  const userSettings = await UserSettings.findOne({user:authId})
  Object.assign(userSettings, {avatar: aws_url})
  await userSettings.save();
  return { imageUrl: aws_url };
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  getUserSettings,
  updateUserSettings,
  uploadAvatar
};
