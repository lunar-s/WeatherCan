const server = require("supertest");
const should = require("chai").should();
const cityFinder = require("../controller/cityFinder");
const app = require("../index");
const { cities } = require("../cities");

describe("City Finder", function () {
  it("should take unicode normalized city name and find it in cities database", function () {
    let city = "montreal";
    let result = cityFinder(city).properties["English Names"];
    let index = cities
      .map((o) => o.properties["English Names"])
      .indexOf("Montréal");
    should.equal(result, cities[index].properties["English Names"]);
  });
  it("should return null for cities that are not supported", function () {
    let city = "houston";
    let result = cityFinder(city);
    should.equal(null, result);
  });
});
