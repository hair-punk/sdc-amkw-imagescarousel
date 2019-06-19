const express = require('express');
let app = express();
const bodyParser = require ('body-parser');
const Images = require('../server/imagesController');
const { formatData } = require('./helpers');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());




// app.get('/product-images', function (req,res, next) {
//   db.Image.find({}, function(err, images) {
//     if (err) {
//       next(err)
//     } else {
//       return res.json({images: images});
//     }
//   })
// })

app.get('/product-images/:id', function (req, res, next) {
  // let id = 1e7-1;
  let id = req.params.id;
  Images.get(id, async (data) => {
    const formattedData = await formatData(data);
    console.log('data for client', formattedData);
    res.json(formattedData);
  });
});

// app.post();

// replaces file as opposed to PATCH
// app.put();

// app.delete();


let port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

