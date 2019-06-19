const path = require('path');
var AWS = require('aws-sdk');

const pathToFile = path.join(__dirname, `../database/awsconfig.json`);
AWS.config.loadFromPath(pathToFile);

var s3 = new AWS.S3();

const formatData = async (data) => {
  // console.log('data to parse', data);
  let result = [];
  let obj = {
    id: data.id,
    fullimages: [],
    thumbnails: []
  };
  for (let key of Object.keys(data)) {
    // console.log('key', key);
    if (key !== 'id') {
      const signedUrl = await _getSignedUrl(data[key]+'.jpg');
      if (data[key].includes('530')) {
        // console.log('key has 530:', data[key]);
        // console.log(signedUrl);
        obj.fullimages.push(signedUrl);
      } else {
        obj.thumbnails.push(signedUrl);
      }
    }
  }
  result.push(obj)
  // console.log('result', result)
  return result;
};

const _getSignedUrl = function (key) {
  return new Promise((resolve, reject) => {
    let params = { Bucket: 'hrr38-sdcteam3-imagecarousel', Key: key };
    s3.getSignedUrl('getObject', params, (err, url) => {
      if (err) return reject(err);
      resolve(url);
    })
  });
};


module.exports = { formatData };