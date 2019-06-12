const { Pool } = require('pg');
const config = require('./postgresconfig.json');

// Getting connectin parameters from config.json
const host = config.host;
const user = config.user;
const pw = config.pw;
const db = config.db;
const port = config.port;
const connectionURI = `postgresql://${user}:${pw}@${host}:${port}/${db}`;

const mydb = 'imagecarousel'
const mytable = 'images';

// Connecting to Database
var pool = new Pool({
  connectionString: connectionURI,
});

pool.connect()
  .then(() => { return pool.query('DROP DATABASE IF EXISTS ' + mydb)})
  .then(() => console.log('db dropped'))
  .then(() => { return pool.query('CREATE DATABASE ' + mydb)})
  .then(() => console.log('db created'))
  .then(() => { pool.end()})
  .then(() => {
    console.log('new pool')
    pool = new Pool({
      connectionString: `postgresql://${user}:${pw}@${host}:${port}/${mydb}`
    })
    return pool;
  })
  .then(() => { return pool.query('CREATE TABLE IF NOT EXISTS ' + mytable + ' (id INT PRIMARY KEY, imagepath1 VARCHAR (20) NOT NULL,thumbnailpath1 VARCHAR (20) NOT NULL,imagepath2 VARCHAR (20) NOT NULL,thumbnailpath2 VARCHAR (20) NOT NULL,imagepath3 VARCHAR (20) NOT NULL,thumbnailpath3 VARCHAR (20) NOT NULL,imagepath4 VARCHAR (20) NOT NULL,thumbnailpath4 VARCHAR (20) NOT NULL,imagepath5 VARCHAR (20) NOT NULL,thumbnailpath5 VARCHAR (20) NOT NULL,imagepath6 VARCHAR (20) NOT NULL,thumbnailpath6 VARCHAR (20) NOT NULL,imagepath7 VARCHAR (20) NOT NULL,thumbnailpath7 VARCHAR (20) NOT NULL,imagepath8 VARCHAR (20) NOT NULL,thumbnailpath8 VARCHAR (20) NOT NULL)')})
  .then(() => console.log('table created'))
  .then(() => { pool.end() })
  .catch(err => console.error(err))

module.exports = pool;