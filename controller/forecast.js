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
    fourthmorrowDay:
      result.siteData.forecastGroup[0].forecast[5].period[0]["_"],
    fourthmorrowConditions:
      result.siteData.forecastGroup[0].forecast[5].textSummary[0],
    fourthmorrowNightConditions:
      result.siteData.forecastGroup[0].forecast[6].textSummary[0],

    hourly: [
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[0]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[1]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[2]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[3]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[4]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[5]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[6]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[7]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[8]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[9]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[10]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[11]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[0]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[1]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[2]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[3]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[4]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[5]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[6]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[7]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[8]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[9]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[10]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
      {
        time: result.siteData.hourlyForecastGroup[0].hourlyForecast[11]["$"]
          .dateTimeUTC,
        temp: "temp",
        cond: "cond",
      },
    ],
    // Summaries for icons
    tonightSummary:
      result.siteData.forecastGroup[0].forecast[0].abbreviatedForecast[0]
        .textSummary[0],
    tomorrowSummary:
      result.siteData.forecastGroup[0].forecast[1].abbreviatedForecast[0]
        .textSummary[0],
    tomorrowNightSummary:
      result.siteData.forecastGroup[0].forecast[2].abbreviatedForecast[0]
        .textSummary[0],
    overmorrowSummary:
      result.siteData.forecastGroup[0].forecast[3].abbreviatedForecast[0]
        .textSummary[0],
    overmorrowNightSummary:
      result.siteData.forecastGroup[0].forecast[4].abbreviatedForecast[0]
        .textSummary[0],
    fourthmorrowSummary:
      result.siteData.forecastGroup[0].forecast[5].abbreviatedForecast[0]
        .textSummary[0],
    fourthmorrowNightSummary:
      result.siteData.forecastGroup[0].forecast[6].abbreviatedForecast[0]
        .textSummary[0],
  };
};

// UNCOMMENT BELOW FOR TESTING
// const result = require("./test_data.json");
// const forecast = forecastData(result);
// console.log(forecast.dateTime);
// console.log("Tonight: " + forecast.tonightConditions);
// console.log("Tonight: " + forecast.tonightCondition);
// console.log();
// console.log(`${forecast.tomorrowDay}: ${forecast.tomorrowConditions}`);
// console.log(`${forecast.tomorrowDay}: ${forecast.tomorrowCondition}`);
// console.log("Night: " + forecast.tomorrowNightConditions);
// console.log("Night: " + forecast.tomorrowNightCondition);
// console.log();
// console.log(`${forecast.overmorrowDay}: ${forecast.overmorrowConditions}`);
// console.log(`${forecast.tomorrowDay}: ${forecast.overmorrowCondition}`);
// console.log("Night: " + forecast.overmorrowNightConditions);
// console.log("Night: " + forecast.overmorrowNightCondition);

module.exports = forecastData;
