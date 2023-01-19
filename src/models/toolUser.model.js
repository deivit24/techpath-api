const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { toolTypes } = require('../config/tools');
const toolUserSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    tool: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Tool',
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
toolUserSchema.plugin(toJSON);

/**
 * Check if user Tool
 * @param {string} tool - Tool
 * @param {string} user - User
 * @returns {Promise<boolean>}
 */
toolUserSchema.statics.doesUserToolExist = async function (tool, user) {
  const userTool = await this.findOne({ tool, user });
  return !!userTool;
};

/**
 * @typedef ToolUser
 */
const ToolUser = mongoose.model('ToolUser', toolUserSchema);

module.exports = ToolUser;
