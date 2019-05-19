const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/images');

let imageSchema = new mongoose.Schema({
  url: String
})

const Image = mongoose.model('Image', imageSchema);

let save = image => {
  var data = new Image ({
    url: image.imageUrl
  })
  data.save (err => {
    if (err) return console.log(err)
  })
}

// let fetch = (callback) => {
//   Images.find((error, results) => {
//     if (error) {
//       callback(error, null);
//       return
//     }
//   var images = {};
//   for (let i = 0; i < results.length; i ++) {
//     if(images[results[i].imageUrl] === undefined)
//   }
//   })
// }


module.exports.Image = Image;
module.exports.save = save;
// bye S
