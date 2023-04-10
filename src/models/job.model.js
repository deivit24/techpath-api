const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const config = require('../config/config');

const jobSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    min: {
      type: Number,
      required: false,
    },
    max: {
      type: Number,
      required: false,
    },
    average: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
jobSchema.plugin(toJSON);

/**
 * Check if job exists
 * @param {string} name - The job's name
 * @returns {Promise<boolean>}
 */
jobSchema.statics.doesJobExist = async function (name) {
  const job = await this.findOne({ name });
  return !!job;
};



/**
 * @typedef Job
 */
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
