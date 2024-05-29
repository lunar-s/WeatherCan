const server = require("supertest");
const should = require("chai").should();
const forecast = require("../controller/forecast");
const app = require("../index");
const testData = require("../controller/test_data.json");

describe("Icon", function () {
  it("should return sunny icon path", function () {
    let condition = "Sunny";
    let result = forecast.iconCondition(condition);
    should.equal(result, "weather-icons/sunny-icon.png");
  });
  it("should return sunny icon path no matter the capitalization", function () {
    let condition = "sUnNy";
    let result = forecast.iconCondition(condition);
    should.equal(result, "weather-icons/sunny-icon.png");
  });
  it("should return snowy icon path", function () {
    let condition = "chance of flurries";
    let result = forecast.iconCondition(condition);
    should.equal(result, "weather-icons/snow-icon.png");
  });
  // it("should return question mark icon path", function () {
  //   let condition = "Cloudy with a chance of meatballs";
  //   let result = forecast.iconCondition(condition);
  //   should.equal(result, "weather-icons/question-mark-icon.png");
  // });
});

// describe("Forecast Data", function () {
//   it("should take forecast data of a city and return object with 22 keys", function () {
//     let data = testData;
//     let result = forecast.forecastData(data);
//     should.equal(Object.keys(result).length, 22);
//   });
// });

describe("Unit Conversion", function () {
  it("should convert 25 celsius to 77 fahrenheit", function () {
    let temp = 25;
    let result = (temp * 1.8 + 32).toFixed();
    should.equal(result, "77");
  });
});
