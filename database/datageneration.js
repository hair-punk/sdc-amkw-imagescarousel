const AWS = require('aws-sdk');
const fs = require('fs');

// currently storing full-sized (530 px) and thumbnail (150px) images in ASW S3 bucket

const writeCSV = async function (numRecords, iteration, offset) {
  iteration = iteration || 0;
  offset = offset || numRecords;
  try {
    AWS.config.loadFromPath(__dirname + '/awsconfig.json');
    s3 = new AWS.S3();

    const response = await s3.listObjectsV2({
      Bucket: 'hrr38-sdcteam3-imagecarousel'
    }).promise();

    let imageCountStorage = {};
    let imageTypeStorage = {};
    for (let image of response.Contents) {
      let countKey = image.Key.split('-').slice(0, 2).join('-');
      let typeKey = image.Key.split('-')[0];
      imageCountStorage[countKey] !== undefined ? imageCountStorage[countKey]++ : imageCountStorage[countKey] = 1;
      if (imageTypeStorage[typeKey] === undefined) { imageTypeStorage[typeKey] = true};
    }
    const file = fs.createWriteStream(__dirname + `/data/mockdata.csv`, { flags: 'w' });

    let csvStr = `gameId,imagePath1,thumbnailPath1,imagePath2,thumbnailPath2,imagePath3,thumbnailPath3,imagePath4,thumbnailPath4,imagePath5,thumbnailPath5,imagePath6,thumbnailPath6,imagePath7,thumbnailPath7,imagePath8,thumbnailPath8\n`;
    for (let i = 0; i < numRecords; i++) {
      // pick a product type
      let types = Object.keys(imageTypeStorage);
      var type = types[Math.floor(Math.random()*types.length)];
      // pick 8 random image numbers
      const imageNums = new Set();
      while (imageNums.size <= 8) {
        imageNums.add(Math.floor(Math.random() * imageCountStorage[`${type}-150`]) + 1);
      }

      // generate a record
      let images = '';
      imageNums.forEach((num) => {
        images += `,${type}-530-${num},${type}-150-${num}`;
      });
      csvStr += `${i+(iteration*offset)}${images}\n`;
      file.write(csvStr);
      csvStr = '';
    }
  } catch (e) {
    console.log('Error:', e);
  }
};

for (let j = 0; j < 2; j++) {
  writeCSV(1e6);
}

// file.on('close', function () {
//   console.log('All done!');
// });