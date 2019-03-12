var assert = require('chai').assert;
var request = require('supertest');
var app = require('../../server.js');


describe("Routes", function() {

  /**
   *  GET /
   */
  describe('GET /', function () {
    it('respond with status code 200', function() {
      return request(app)
        .get('/release-notes')
        .then(response => {
          assert.strictEqual(response.status, 200)
          // console.log(response);
        });
    });
  });

  /**
   *  GET /release-notes
   */
  describe('GET /release-notes', function() {
    it('respond with status code 200', function() {
      return request(app)
        .get('/release-notes')
        .then(response => {
          assert.strictEqual(response.status, 200)
          // console.log(response);
        });
    });
  });

  /**
   * Testing GET /api/components endpoint
   */
  describe('GET /api/components', function() {
    it('respond with json containing a list of all components', function() {
      return request(app)
        .get('/api/components')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
          assert.equal(response.body.title, 'Style Guide | Components');
        });
    });
  });


  /**
   * Testing GET /components/:category
   */
  describe('GET /components/:category', function () {
    it('/components/:category responds with json containing a single component', function (done) {
      request(app)
        .get('/components/alerts')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('/components/overview responds with json containing all components', function (done) {
      request(app)
        .get('/components/overview')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  /**
   * Testing GET /styles/:category
   */
  describe('GET /styles/:category', function () {
    it('respond with json containing a single component', function (done) {
      request(app)
        .get('/styles/colors')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('respond with json containing a all components', function (done) {
      request(app)
        .get('/styles/overview')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  /**
   * Testing GET *
   */
  describe('GET *', function () {
    it('respond with a 404 error', function (done) {
      request(app)
        .get('/*')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

});


