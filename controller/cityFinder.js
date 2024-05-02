const { cities } = require("../cities");

const cityFinder = (cityToFind) => {
  const city = cities.find(
    (city) =>
      city.properties["English Names"]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(" ", "")
        .replace(".", "") === cityToFind
  );
  // res.render("city.ejs", {
  //   city: city.properties["English Names"],
  //   province: city.properties["Province Codes"],
  // });
  if (city) return city;
  console.log("Error: No city found!");
  console.log(cityToFind);
  return null;
};

module.exports = cityFinder;
