var server = require("supertest");
var should = require("chai").should();
var app = require("../index");
const cheerio = require('cheerio');

describe("Index", function () {
  it("should pass", function (done) {
    server(app)
      .get("/")
      .end(function (err, res) {
        if (err) done(err);
        should.equal(res.status, 200);
        done();
      });
  });
});

describe("Bad URL", function () {
  it("should pass", function (done) {
    server(app)
      .get("/vancouver")
      .end(function (err, res) {
        if (err) done(err);
        should.equal(res.status, 404);
        done();
      });
  });
});

describe("Valid search", function () {
  it("should pass", function (done) {
    server(app)
      .get("/forecast?city=vancouver")
      .end(function (err, res) {
        if (err) done(err);
        should.equal(res.status, 200);
        done();
      });
  });
});


describe("Invalid search", function () {
  it("should pass", function (done) {
    server(app)
      .get("/forecast?city=vancouvar")
      .end(function (err, res) {
        if (err) done(err);
        const $ = cheerio.load(res.text);
        const error = $('p').text();
        should.equal($('p').text(), 'Error 404: City "vancouvar" Not Found');

        done();
      });
  })
});




