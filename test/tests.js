const chai = require('chai');
const expect = chai.expect
const db = require('../database/index.js');
const {seeder} = require('../database/aws.js');

describe('Database', () => {
  beforeEach((done) => {
    db.Image.deleteMany((err) => {
      if (err){
        done(err)
      } else {
        done();
      }
    })
  })

  it('Should be empty', (done) => {
    db.Image.find((err, results) => {
      if(err){
        done(err)
      }
      expect(results).to.be.an('array');
      expect(results.length).to.equal(0);
      done();
    })
  })

  it('Should contain two documents', (done) => {
    let picture = new db.Image(
      { url: 'pictureofsomethingniceurl-1' })

    picture.save(() => {
      db.Image.find((err, results) => {
        if (err) {
          done(err)
        }
        expect(results).to.be.an('array');
        expect(results.length).to.equal(1);
        done()
      })
    })
  })

  it('Should have more than 100 documents after seeding', (done) => {
    seeder()
    done()
    .then( db.Image.find((err, results) => {
      if (err) {
        done (err)
      }
      expect(results).to.be.an('array');
      expect(results.length).to.be.greaterThan(100);
      done()
    }))

  })

})
