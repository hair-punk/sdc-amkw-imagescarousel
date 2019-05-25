const express = require('express');
let app = express();
const bodyParser = require ('body-parser');
const db = require('../database/index.js');
// const seeding = require('../database/aws.js')




// console.log(seeding)

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());




app.get('/product-images', function (req,res, next) {
  db.Image.find({}, function(err, images) {
    if (err) {
      next(err)
    } else {
      return res.json({images: images});
    }
  })
})


let port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

