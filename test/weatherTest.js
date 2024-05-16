const server = require("supertest");
const should = require("chai").should();
const assert = require("chai").assert;
const app = require("../index");
const https = require("https");
const parseString = require("xml2js").parseString;
const cityFinder = require("../controller/cityFinder");

describe("XML to JSON", function () {
  it("should download XML and convert to object", function (done) {
    server(app);
    let cityToFind = "montreal"
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(" ", "")
      .replace(".", "");
    const city = cityFinder(cityToFind);

    if (city) {
      const province = city.properties["Province Codes"];
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
            should.not.equal(result, xml);
            done();
          });
        });
      });
    }
  });
});
