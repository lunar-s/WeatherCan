const https = require("https");
const cityFinder = require("../controller/cityFinder");
const parseString = require("xml2js").parseString;
const weatherConditions = require("./conditions");
const forecastData = require("../controller/forecast");

const unitConvert = (temperature) => {
  let temperatureF = temperature * 1.8 + 32;
  return temperatureF.toFixed(1);
};

const iconCondition = (currentConditions) => {
  if (weatherConditions["sunny"].includes(currentConditions)) {
    return "weather-icons/sunny-icon.png";
  } else if (weatherConditions["cloudy"].includes(currentConditions)) {
    return "weather-icons/cloudy-icon.png";
  } else if (weatherConditions["suncloud"].includes(currentConditions)) {
    return "weather-icons/partly-cloudy-icon.png";
  } else if (weatherConditions["rain"].includes(currentConditions)) {
    return "weather-icons/rain-icon.png";
  } else if (weatherConditions["snow"].includes(currentConditions)) {
    return "weather-icons/snow-icon.png";
  } else if (weatherConditions["clear"].includes(currentConditions)) {
    return "weather-icons/night-clear-icon.png";
  } else {
    return "weather-icons/question-mark-icon.npg";
  }
};

const temperatureExtract = (req, res) => {
  let cityToFind = req.query.city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(" ", "")
    .replace(".", "");
  const city = cityFinder(cityToFind);

  if (city) {
    const province = city.properties["Province Codes"];
    const cityName = city.properties["English Names"];
    const cityCode = city.properties.Codes;
    const unitType = req.query.unit;
    const url = `https://dd.weather.gc.ca/citypage_weather/xml/${province}/${cityCode}_e.xml`;

    // COMMENT BELOW FOR TESTING PURPOSES
    // https.get(url, (xml) => {
    //   let data = "";
    //   xml.on("data", (chunk) => {
    //     data += chunk;
    //   });
    //   xml.on("end", () => {
    //     parseString(data, (err, result) => {
          // if (err) throw err;
          // STOP COMMENT HERE
          // UNCOMMENT LINE BELOW FOR TESTING
          const result = require("../controller/test_data.json");
          const forecast = forecastData(result);

          if (unitType === "fahrenheit") {
            res.render("city", {
              city: cityName,
              province: province,
              temperature: `${unitConvert(forecast.temperature)} °F`,
              currentConditions: forecast.currentConditions,
              iconCondition: iconCondition(forecast.currentConditions[0]),
              dateTime: forecast.dateTime,
              tonightConditions: forecast.tonightConditions,
              tonightIcon: iconCondition(forecast.tonightCondition), 
            });
          } else {
            res.render("city", {
              city: cityName,
              province: province,
              temperature: `${forecast.temperature} °C`,
              currentConditions: forecast.currentConditions,
              iconCondition: iconCondition(forecast.currentConditions[0]),
              dateTime: forecast.dateTime,
              tonightConditions: forecast.tonightConditions,
              tonightIcon: iconCondition(forecast.tonightCondition), 
            });
          }
          // COMMENT BELOW FOR TESTING PURPOSES
    //     });
    //   });
    // });
    // STOP COMMENT HERE
  } else {
    res.render("404", {
      city: req.query.city,
      province: null,
      temperature: null,
      currentConditions: null,
    });
  }
};

module.exports = temperatureExtract;
