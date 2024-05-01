const { cities } = require("../cities");

const cityFinder = (cityToFind) => {
  const city = cities.find(
    (city) => city.properties["English Names"].toLowerCase() === cityToFind
  );
  // res.render("city.ejs", {
  //   city: city.properties["English Names"],
  //   province: city.properties["Province Codes"],
  // });
  if (city) return city;
  console.log("Error: No city found!");
  return null;
};

module.exports = cityFinder;
