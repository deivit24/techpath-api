var S3 = require('aws-sdk/clients/s3');
var uuid = require('uuid');
var config = require('../config/config');
const fs = require('fs');
const { log } = require('console');
const e = require('express');

const S3Client = new S3({
  region: config.aws.region,
  credentials: {
    accessKeyId: config.aws.accessKey,
    secretAccessKey: config.aws.secretKey,
  },
});

const createBucket = () => {
  S3Client.createBucket({ Bucket: config.aws.bucket }, function (err, data) {
    if (err && err.statusCode == 409) {
      console.log('INFO', 'Bucket already exists');
    } else if (err) {
      console.log('ERROR', err);
    } else {
      console.log('Bucket URL is ', data.Location);
    }
  });
};

const uploadFile = async (image) => {
  const key = `uploads/${uuid.v4().slice(0, 8)}` + image.file.name.replace(/\s+/g, '-').toLowerCase();

  const uploadParams = {
    Bucket: config.aws.bucket,
    Body: image.file.data,
    Key: key,
  };

  try {
    await S3Client.putObject(uploadParams).promise();

    return `https://${config.aws.bucket}.s3.${config.aws.region}.amazonaws.com/${key}`;
  } catch (e) {
    return e;
  }
};
module.exports = {
  createBucket,
  uploadFile,
};
