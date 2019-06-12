const fs = require('fs');
const path = require('path');
var { Pool } = require('pg');
const copyFrom = require('pg-copy-streams').from;
const config = require('./postgresconfig.json');

const writedb = async () => {
  const host = config.host;
  const user = config.user;
  const pw = config.pw;
  const db = 'imagecarousel';
  const port = config.port;
  const connectionURI = `postgresql://${user}:${pw}@${host}:${port}/${db}`;

  var inputFile = path.join(__dirname, '../data/mockdata.csv');
  const targetTable = 'images';

  const pool = new Pool({
    connectionString: connectionURI,
  });

  pool.connect(function (err, client, done) {
    if (err) return console.error(err);
    var stream = client.query(copyFrom(`COPY ${targetTable} (id, imagepath1,thumbnailpath1,imagepath2,thumbnailpath2,imagepath3,thumbnailpath3,imagepath4,thumbnailpath4,imagepath5,thumbnailpath5,imagepath6,thumbnailpath6,imagepath7,thumbnailpath7,imagepath8,thumbnailpath8) FROM STDIN CSV`));
    var fileStream = fs.createReadStream(inputFile);
    fileStream.on('error', done);
    stream.on('error', done);
    stream.on('end', done);
    fileStream.pipe(stream);
    console.log('in writedb');
  });
};

module.exports = writedb;