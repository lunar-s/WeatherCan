var server = require("supertest");
var should = require("chai").should();
var app = require("../index");
const cheerio = require('cheerio');


describe('500-error', function() {
    it('responds with 500 error when server encounters an error', function(done) {
    
      server(app)
        .get('/forecast?city=vancouver')
        .expect(500)
        .end(function(err, res) {
          if (err) return done(err);
          should.equal(res.status, 500);
          console.log(res);
          done();
        });
    });
  });


