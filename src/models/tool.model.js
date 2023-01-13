const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { toolTypes } = require('../config/tools');
const toolSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: [toolTypes.FRONTEND, toolTypes.BACKEND, toolTypes.DEVOPS],
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
toolSchema.plugin(toJSON);

/**
 * Check if tool exists
 * @param {string} name - The user's email
 * @param {ObjectId} [user] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
toolSchema.statics.doesToolExist = async function (name, user) {
  const tool = await this.findOne({ name, user });
  return !!tool;
};

/**
 * @typedef Tool
 */
const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
