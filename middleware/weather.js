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
  if (weatherConditions["sunny"].includes(currentConditions.toLowerCase())) {
    return "weather-icons/sunny-icon.png";
  } else if (weatherConditions["cloudy"].includes(currentConditions.toLowerCase())) {
    return "weather-icons/cloudy-icon.png";
  } else if (weatherConditions["suncloud"].includes(currentConditions.toLowerCase())) {
    return "weather-icons/partly-cloudy-icon.png";
  } else if (weatherConditions["rain"].includes(currentConditions.toLowerCase())) {
    return "weather-icons/rain-icon.png";
  } else if (weatherConditions["snow"].includes(currentConditions.toLowerCase())) {
    return "weather-icons/snow-icon.png";
  } else if (weatherConditions["clear"].includes(currentConditions.toLowerCase())) {
    return "weather-icons/night-clear-icon.png";
  } else {
    return "weather-icons/question-mark-icon.png";
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

    res.render("city", {
      city: cityName,
      province: province,
      temperature: `${forecast.temperature} °C`,
      currentConditions: forecast.currentConditions,
      iconCondition: iconCondition(forecast.currentConditions[0]),
      dateTime: forecast.dateTime,
      tonightConditions: forecast.tonightConditions,
      tonightSummary: forecast.tonightSummary,
      tonightIcon: iconCondition(forecast.tonightSummary),
      tomorrowDay: forecast.tomorrowDay,
      tomorrowConditions: forecast.tomorrowConditions,
      tomorrowSummary: forecast.tomorrowSummary,
      tonightSummary: forecast.tonightSummary,
      tomorrowIcon: iconCondition(forecast.tomorrowSummary),
      overmorrowDay: forecast.overmorrowDay,
      overmorrowConditions: forecast.overmorrowConditions,
      overmorrowSummary: forecast.overmorrowSummary,
      overmorrowIcon: iconCondition(forecast.overmorrowSummary),
      fourthmorrowDay: forecast.fourthmorrowDay,
      fourthmorrowConditions: forecast.fourthmorrowConditions,
      fourthmorrowSummary: forecast.fourthmorrowSummary,
      fourthmorrowIcon: iconCondition(forecast.fourthmorrowSummary),
      hourlyForecast: forecast.hourly,
    });

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
