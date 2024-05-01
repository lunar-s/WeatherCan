const { cities } = require("../cities");

module.exports = {
  cityFinder: (req, res) => {
    cityToFind = req.params.city;
    const city = cities.find(
      (city) => city.properties["English Names"].toLowerCase() === cityToFind
    );
    res.render("city.ejs", {
      city: city.properties["English Names"],
      province: city.properties["Province Codes"],
    });
  },
};
