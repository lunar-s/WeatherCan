var server = require("supertest");
var should = require("chai").should();
var app = require("../cities");
const cheerio = require('cheerio');

describe("cities", function () {
    it("should pass", function (done) {
      server(app)
        .get("/")
        .end(function (err, res) {
          if (err) done(err);
          console.log(res);
          done();
        });
    });
  });