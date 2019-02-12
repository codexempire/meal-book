/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// importing dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';

// import app from app.js
import app from '../app';

// initiating
chai.use(chaiHttp);
chai.should();

// testing the get all meal routes
describe('GET all meals', () => {
  it('should return list of all the meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a.json;
        res.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('mealUrl');
        res.body.data[0].should.have.property('meal');
        res.body.data[0].should.have.property('price');
        done(err);
      });
  });
});
