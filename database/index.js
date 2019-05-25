
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/images', {
  useMongoClient: true,
});

let imageSchema = new mongoose.Schema({
  url:  { type : String }
})

const Image = mongoose.model('Image', imageSchema);

//test to see if documents are added to the collection properly
// var oneLink = new Image ({url: 'elurldellink'})
// console.log(oneLink.url)

let save = image => {
  var data = new Image ({
    url: image.imageUrl
  })
  data.save (err => {
    if (err) return console.log(err)
  })
}

//part of the test above
// oneLink.save();

module.exports.Image = Image;
module.exports.save = save;
