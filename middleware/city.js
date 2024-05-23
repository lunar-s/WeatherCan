const cityFinder = require("../controller/cityFinder");
const { forecastData, iconCondition } = require("../controller/forecast");
const { cities } = require("../cities");

const citiesOut = (req, res) => {
    res.render("city_list", {
        city: "All Cities",
        temperature: "",
        cities: cities,
    })
};

module.exports = { citiesOut };