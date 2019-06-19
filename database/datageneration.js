const AWS = require('aws-sdk');
const fs = require('fs');

// currently storing full-sized (530 px) and thumbnail (150px) images in ASW S3 bucket

const writeCSV = async function (numRecords, iteration, offset) {
  iteration = iteration || 0;
  offset = offset || numRecords;
  try {
    // AWS.config.loadFromPath(__dirname + '/awsconfig.json');
    // s3 = new AWS.S3();

    // const response = await s3.listObjectsV2({
    //   Bucket: 'hrr38-sdcteam3-imagecarousel'
    // }).promise();

    let imageCountStorage = {};
    let imageTypeStorage = {};
    // for (let image of response.Contents) {
    //   let countKey = image.Key.split('-').slice(0, 2).join('-');
    //   let typeKey = image.Key.split('-')[0];
    //   imageCountStorage[countKey] !== undefined ? imageCountStorage[countKey]++ : imageCountStorage[countKey] = 1;
    //   if (imageTypeStorage[typeKey] === undefined) { imageTypeStorage[typeKey] = true};
    // }
    const file = fs.createWriteStream(__dirname + `/data/mockdatatest.csv`, { flags: 'w', autoclose: true });

    let csvStr = '';
    // Headers for csv below, but decided not to use them in seed script
    // let csvStr = `gameId,imagePath1,thumbnailPath1,imagePath2,thumbnailPath2,imagePath3,thumbnailPath3,imagePath4,thumbnailPath4,imagePath5,thumbnailPath5,imagePath6,thumbnailPath6,imagePath7,thumbnailPath7,imagePath8,thumbnailPath8\n`;
    for (let i = 0; i < numRecords; i++) {
      // pick a product type
      // let types = Object.keys(imageTypeStorage);
      // var type = types[Math.floor(Math.random()*types.length)];
      var type = 'stone';
      // pick 8 random image numbers of product type
      const imageNums = new Set();
      while (imageNums.size < 8) {
        imageNums.add(Math.floor(Math.random() * 30) + 1);
        // imageNums.add(Math.floor(Math.random() * imageCountStorage[`${type}-150`]) + 1);
      }

      // generate a record
      let images = '';
      imageNums.forEach((num) => {
        // paths to images and corresponding thumbnails
        images += `,${type}-530-${num},${type}-150-${num}`;
      });
      // i+(iteration*offset) tracks ID, instead of using db to generate ID
      csvStr += `${i+(iteration*offset)}${images}\n`;
      file.write(csvStr);
      csvStr = '';
    }
    console.log('end writeCSV');
  } catch (e) {
    console.log('Error:', e);
  }
};

module.exports = writeCSV;

// TODO use AWS again
// TODO Change ALL references to sdctest database back to imagecarousel