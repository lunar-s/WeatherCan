var server = require('supertest');
var should = require('chai').should();
var forecast = require('../controller/forecast');
var app = require("../index");
var testData = require("../controller/test_data.json");


describe("Icon", function() {
    it("should return sunny icon path", function() {
        var condition = "Sunny";
        var result = forecast.iconCondition(condition);
        should.equal(result, "weather-icons/sunny-icon.png");
    });
});

describe("Forecast Data", function() {
    it("should take forecast data of a city and return object with 22 keys", function() {
        var data = testData;
        var result = forecast.forecastData(data);
        should.equal(Object.keys(result).length, 22);
    });
});

describe("Unit Conversion", function() {
    it("should convert 25 celsius to 77 fahrenheit", function() {
        var temp = 25;
        var result = (temp * 1.8 + 32).toFixed();
        should.equal(result, '77');
    })
})
