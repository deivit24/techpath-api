const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const languageTypes = {
  ENGLISH: 'ENGLISH',
  SPANISH: 'SPANISH',
};

const learningTypes = {
  BOOTCAMP: 'Bootcamp',
  CSDEGREE: 'C.S. Degree',
  SELFTAUGHTFREE: 'Self-taught Free',
  ONLINEPAID: 'Online Paid Courses',
};

const userSettingsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    darkMode: {
      type: Boolean,
      required: false,
      default: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    employed: {
      type: Boolean,
      default: false,
    },
    currentCompensation: {
      type: Number,
    },
    student: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String,
    },
    learningMethod: {
      type: String,
      enum: [learningTypes.BOOTCAMP, learningTypes.CSDEGREE, learningTypes.SELFTAUGHTFREE, learningTypes.ONLINEPAID],
    },
    currentTitle: {
      type: String,
    },
    language: {
      type: String,
      enum: languageTypes,
      default: 'ENGLISH',
    },
    avatar: {
      type: String,
      default: 'https://ui-avatars.com/api/?name=TP',
    },
    private: {
      type: Boolean,
      default: true,
    },
    github: {
      type: String,
      required: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSettingsSchema.plugin(toJSON);
userSettingsSchema.plugin(paginate);

/**
 * @typedef UserSettings
 */
const UserSettings = mongoose.model('UserSettings', userSettingsSchema);

module.exports = UserSettings;
