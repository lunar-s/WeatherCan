var server = require('supertest');
var should = require('chai').should();
var cityFinder = require('../controller/cityFinder');
var app = require("../index");
const { cities } = require("../cities");

describe("City Finder", function() {
    it("should take unicode normalized city name and find it in cities database", function() {
        var city = "montreal";
        var result = cityFinder(city).properties["English Names"];
        var index = cities.map((o) => o.properties["English Names"]).indexOf("Montréal");
        console.log(result);
        should.equal(result, cities[index].properties["English Names"]);
    })
})
