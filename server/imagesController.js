const { Client } = require('pg');
const config = require('../database/postgres/postgresconfig.json');

// Getting connectin parameters from config.json
const host = config.host;
const user = config.user;
const pw = config.pw;
const db = 'imagecarousel';
const port = config.port;
const connectionURI = `postgresql://${user}:${pw}@${host}:${port}/${db}`;

const mytable = 'images';

// Connecting to Database
var client = new Client({
  connectionString: connectionURI,
});

client.connect();

var Images = {

  get: async function(id, callback) {
    await client.query(`SELECT * FROM ${mytable} WHERE id=${id}`)
    .then((result) => {
      console.log('my result from db:', result.rows[0]);
      callback(result.rows[0]);
    })
    .catch(err => console.error(err))
  }

};

// Images.get(1, (data) => {
//   console.log('data', data);
// });

module.exports = Images;

// TODO release/close/end client