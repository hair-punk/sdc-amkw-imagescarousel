var pg = require('pg');
const path = require('path');
const config = require('./postgresconfig.json');

const writedb = async (done) => {
  const host = config.host;
  const user = config.user;
  const pw = config.pw;
  const db = 'sdcimagecarousel';
  const port = config.port;
  const connection = `postgresql://${user}:${pw}@${host}:${port}/${db}`;

  var inputFile = path.join(__dirname, `../data/mockdata.csv`);
  const targetTable = 'images';

  const client = new pg.Client(connection);
  await client.connect((err, connection) => {
    if (err) return console.error(err);
    console.log('postgress connected')
  })

  await client.query(`COPY ${targetTable} (id, imagepath1,thumbnailpath1,imagepath2,thumbnailpath2,imagepath3,thumbnailpath3,imagepath4,thumbnailpath4,imagepath5,thumbnailpath5,imagepath6,thumbnailpath6,imagepath7,thumbnailpath7,imagepath8,thumbnailpath8) FROM '${inputFile}' DELIMITER ','`);

  await client.end();
};

module.exports = writedb;
