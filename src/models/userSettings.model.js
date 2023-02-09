const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const languageTypes = {
  ENGLISH: 'ENGLISH',
  SPANISH: 'SPANISH',
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
    language: {
      type: String,
      enum: languageTypes,
      default: 'ENGLISH',
    },
    avatar: {
      type:String,
      default: "https://ui-avatars.com/api/?name=TP"
    },
    private:{
      type: Boolean,
      default: true
    },
    github: {
      type: String,
      required: false
    },
    linkedin: {
      type: String,
      required: false
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
