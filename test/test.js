/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// importing dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';

// coveralls
require 'coveralls';
Coveralls.wear!

// import app from app.js
import app from '../app';

// initiating
chai.use(chaiHttp);
chai.should();

// testing the get all meal route
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

// testing the post meal route
describe('POST meal', () => {
  it('should add a meal to data structure', (done) => {
    chai.request(app)
      .post('/api/v1/meals/')
      .send({
        meal: 'Rice',
        price: '$50',
        mealUrl: 'https://www.rend.com',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.a.json;
        res.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('mealUrl');
        res.body.data[0].should.have.property('meal');
        res.body.data[0].should.have.property('price');
        res.body.data[0].id.should.equal(2);
        res.body.data[0].meal.should.equal('Rice');
        res.body.data[0].price.should.equal('$50');
        res.body.data[0].mealUrl.should.equal('https://www.rend.com');
        done(err);
      });
  });
});

// testing the delete meal route
describe('DELETE meal', () => {
  it('should delete a meal from data structure', (done) => {
    const id = 1;
    chai.request(app)
      .delete(`/api/v1/meals/${id}`)
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
        res.body.data[0].id.should.equal(1);
        res.body.data[0].meal.should.equal('Rice and Sauce');
        res.body.data[0].price.should.equal('$50');
        done(err);
      });
  });
});
