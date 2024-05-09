const fs = require("fs");
const https = require("https");
const cityFinder = require("../controller/cityFinder");
const parseString = require("xml2js").parseString;
const weatherConditions = require("./conditions");

const unitConvert = (temperature) => {
  let temperatureF = temperature * 1.8 + 32;
  return temperatureF.toFixed(1);
};

const iconCondition = (currentConditions) => {
  if (conditionSunny.includes(currentConditions)) {
    return "link_to_image";
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
    https.get(url, (xml) => {
      let data = "";
      xml.on("data", (chunk) => {
        data += chunk;
      });

      xml.on("end", () => {
        parseString(data, (err, result) => {
          if (err) throw err;
          const temperature =
            result.siteData.currentConditions[0].temperature[0]["_"];
          const currentConditions =
            result.siteData.currentConditions[0].condition;
          console.log(currentConditions);
          if (unitType === "fahrenheit") {
            res.render("city", {
              city: cityName,
              province: province,
              temperature: `${unitConvert(temperature)} °F`,
              currentConditions: currentConditions,
              iconCondition: iconCondition(),
            });
          } else {
            res.render("city", {
              city: cityName,
              province: province,
              temperature: `${temperature} °C`,
              currentConditions: currentConditions,
              conditionSunny: weatherConditions["sunny"],
              conditionSuncloud: weatherConditions["suncloud"],
              conditionRain: weatherConditions["rain"],
              conditionSnow: weatherConditions["snow"],
              conditionCloudy: weatherConditions["cloudy"],
            });
          }
        });
      });
    });
    // console.log(result.siteData.currentConditions[0].temperature[0]["_"]);
  } else {
    res.render("404", {
      city: req.query.city,
    });
  }
};

module.exports = temperatureExtract;
