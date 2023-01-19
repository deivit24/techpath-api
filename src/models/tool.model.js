const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { toolTypes } = require('../config/tools');
const toolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    type: [
      {
        type: String,
        enum: [toolTypes.FRONTEND, toolTypes.BACKEND, toolTypes.DEVOPS],
      },
    ],
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
toolSchema.plugin(toJSON);

/**
 * Check if tool exists
 * @param {string} name - The tool's name
 * @returns {Promise<boolean>}
 */
toolSchema.statics.doesToolExist = async function (name) {
  const tool = await this.findOne({ name });
  return !!tool;
};

/**
 * @typedef Tool
 */
const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
