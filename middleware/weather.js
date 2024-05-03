const fs = require("fs");
const https = require("https");
const cityFinder = require("../controller/cityFinder");
const parseString = require("xml2js").parseString;

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
    const url = `https://dd.weather.gc.ca/citypage_weather/xml/${province}/${cityCode}_e.xml`;
    https.get(url, (xml) => {
      let data = "";
      xml.on("data", (chunk) => {
        data += chunk;
      });

      xml.on("end", () => {
        parseString(data, (err, result) => {
          if (err) throw err;
          res.render("city", {
            city: cityName,
            province: province,
            temperature:
              result.siteData.currentConditions[0].temperature[0]["_"],
          });
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
