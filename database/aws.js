const AWS = require('aws-sdk');
const Credentials = require ('../config.js');
const mongoose = require('mongoose');

//configuring the AWS environment
//This function will retrieve the Credentials from config.js.
//These credentials have been created in Amazon S3. The name of the Bucket is the name of the Bucket created in S3 where I have previously stored 100 images related to products.

const seeder = async function () {
  try {
    //connects to Amazon S3
    AWS.config.update({
      accessKeyId: Credentials.AccessKeyID,
      secretAccessKey: Credentials.SecretAccessKey,
      region: 'us-east-1'
    });
    //Access the Bucket and retrieves all files in the Bucket
    s3 = new AWS.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'renderingimagesforetsy'
    }).promise()

    var contents = response.Contents
    //make sure the table is empty before populating it with content from the Amazon S3 Bucket
    deleteTable()
    //for some reason a simple for loop wouldn't work here but a for of loop did.
    for (var image of contents){
      let newImage = new Image ({url: 'https://s3.amazonaws.com/renderingimagesforetsy/' + image.Key})
      newImage.save()

    }
  } catch (e) {
    console.log('our error', e);
  }
};


// seeder()

const {Image} = require ('./index.js')

//helper function that will delete the MongoDB collection AKA as table
function deleteTable () {
  mongoose.connection.dropCollection(('images'), function (err, result) {
    if (err) {
        console.log("there was an error deleting the collection");
    } else {
        console.log("collection successfully deleted");
    }
  })
}

module.exports.seeder = seeder;







