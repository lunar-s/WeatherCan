const forecastData = (result) => {
  return {
    temperature: result.siteData.currentConditions[0].temperature[0]["_"],
    currentConditions: result.siteData.currentConditions[0].condition,
    dateTime: `${result.siteData.dateTime[1].hour}:00 ${
      result.siteData.dateTime[1]["$"].zone
    } ${result.siteData.dateTime[1].day[0]["$"].name} ${parseInt(
      result.siteData.dateTime[1].day[0]["_"]
    )} ${result.siteData.dateTime[1].month[0]["$"].name} ${
      result.siteData.dateTime[1].year
    }`,
    tonightConditions:
      result.siteData.forecastGroup[0].forecast[0].textSummary[0],
    tomorrowDay: result.siteData.forecastGroup[0].forecast[1].period[0]["_"],
    tomorrowConditions:
      result.siteData.forecastGroup[0].forecast[1].textSummary[0],
    tomorrowNightConditions:
      result.siteData.forecastGroup[0].forecast[2].textSummary[0],
    overmorrowDay: result.siteData.forecastGroup[0].forecast[3].period[0]["_"],
    overmorrowConditions:
      result.siteData.forecastGroup[0].forecast[3].textSummary[0],
    overmorrowNightConditions:
      result.siteData.forecastGroup[0].forecast[4].textSummary[0],
  };
};

// UNCOMMENT BELOW FOR TESTING
// const result = require("./test_data.json");
// const forecast = forecastData(result);
// console.log(forecast.dateTime);
// console.log("Tonight: " + forecast.tonightConditions);
// console.log();
// console.log(`${forecast.tomorrowDay}: ${forecast.tomorrowConditions}`);
// console.log("Night: " + forecast.tomorrowNightConditions);
// console.log();
// console.log(`${forecast.overmorrowDay}: ${forecast.overmorrowConditions}`);
// console.log("Night: " + forecast.overmorrowNightConditions);

module.exports = forecastData;
