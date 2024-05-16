const server = require("supertest");
const should = require("chai").should();
const app = require("../index");

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

describe("Entering unsupported city", function () {
  it("should show 404 page", function (done) {
    server(app)
      .get("/forecast?city=vancouvar")
      .end(function (err, res) {
        if (err) done(err);
        let value = res.text.includes("Error 404");
        should.equal(res.status, 200);
        should.equal(value, true);
        done();
      });
  });
});
