const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { toolTypes } = require('../config/tools');
const config = require('../config/config');
const toolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    type: [
      {
        type: String,
        enum: [
          toolTypes.FRONTEND,
          toolTypes.BACKEND,
          toolTypes.DEVOPS,
          toolTypes.DATABASE,
          toolTypes.EMBEDDED,
          toolTypes.GAME,
          toolTypes.QA,
        ],
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
 * returns key out of imageUrl
 * @returns {Promise<string>}
 */
toolSchema.methods.key = function () {
  const tool = this;
  const uploads = 'uploads'
  if (!tool.imageUrl.includes(config.aws.bucket)) return tool.imageUrl

  return `${uploads}`+ tool.imageUrl.split(uploads)[1]
};

/**
 * @typedef Tool
 */
const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
