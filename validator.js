
const cities = require('./cities');

function validateCityCode(cityName, code) {
  const city = cities.find(c => c.properties["English Names"] === cityName);
  return city ? city.properties.Codes === code : false;
}

module.exports = validateCityCode;
