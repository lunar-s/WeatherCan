const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
// const { cities } = require("./cities.js");
const { temperatureExtract } = require("./middleware/weather");
const { citiesOut } = require("./middleware/city");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);
app.set("view engine", "ejs");

// Routes start here
app.get("/forecast", temperatureExtract);

app.get("/city_list", citiesOut);

app.listen(8080, function () {
  console.log(
    "Server running. Visit: http://localhost:8080 in your browser 🚀"
  );
});

module.exports = app