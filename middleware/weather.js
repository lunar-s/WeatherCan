const fs = require("fs");
const https = require("https");
const cityFinder = require("../controller/cityFinder");
const parseString = require("xml2js").parseString;
const weatherConditions = {
  sunny: ["Sunny", "Mainly Sunny"],
  suncloud: ["Partly Cloudy", "Mostly Cloudy"],
  cloudy: ["Haze", "Fog", "Ice Fog", "Fog Patches", "Shallow Fog", "Mist", "Cloudy"],
  rain: ["Light Rain Shower", "Light Rain Shower and Flurries", "Thunderstorm with Rain", "Thunderstorm", "Heavy Thunderstorm with Rain", "Heavy Thunderstorm", "Light Drizzle", "Heavy Drizzle", "Drizzle", "Light Rain and Drizzle", "Light Rain", "Rain and Drizzle", "Rain Shower", "Heavy Rain and Drizzle", "Heavy Rain Shower", "Heavy Rain", "Rain", "Light Freezing Drizzle", "Light Freezing Rain", "Heavy Freezing Drizzle", "Heavy Freezing Rain", "Light Rain and Snow", "Heavy Rain Shower and Flurries", "Thunderstorm with Heavy Rain",  "Thunderstorm with Light Rain", "Freezing Drizzle", "Freezing Rain"],
  snow: ["Heavy Rain and Snow", "Light Snow", "Snow", "Flurries", "Heavy Flurries", "Heavy Snow", "Rain and Flurries", "Rain and Snow", "Light Flurries"]
}
console.log(weatherConditions['sunny']);

const unitConvert = (temperature) => {
  let temperatureF = temperature * 1.8 + 32;
  return temperatureF.toFixed(1);
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
            console.log(currentConditions)
          if (unitType === "fahrenheit") {
            res.render("city", {
              city: cityName,
              province: province,
              temperature: `${unitConvert(temperature)} °F`,
              currentConditions: currentConditions,
              conditionSunny: weatherConditions['sunny'],
              conditionSuncloud: weatherConditions['suncloud'],
              conditionRain: weatherConditions['rain'],
              conditionSnow: weatherConditions['snow'],
              conditionCloudy: weatherConditions['cloudy'],
            });
          } else {
            res.render("city", {
              city: cityName,
              province: province,
              temperature: `${temperature} °C`,
              currentConditions: currentConditions,
              conditionSunny: weatherConditions['sunny'],
              conditionSuncloud: weatherConditions['suncloud'],
              conditionRain: weatherConditions['rain'],
              conditionSnow: weatherConditions['snow'],
              conditionCloudy: weatherConditions['cloudy'],
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
