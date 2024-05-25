const date = require('date-and-time');
const weatherConditions = require("./conditions");

const iconCondition = (condition) => {
  for(let weatherType in weatherConditions){
    const conditionsArray = weatherConditions[weatherType];
    for(let i = 0; i < conditionsArray.length; i++){
      if(condition.toLowerCase().includes(conditionsArray[i].toLowerCase())){
        return `weather-icons/${weatherType}-icon.png`;
      }
    }
  }
  
  // Data contains no condition
  if (!condition) {
    return "";
  }
};




const forecastData = (result) => {
  return {
    temperature: result.siteData.currentConditions[0].temperature[0]["_"],
    currentConditions: result.siteData.currentConditions[0].condition,
    dateTime: `${date.format(date.parse(result.siteData.dateTime[1].hour[0], "HH", true), "hA", true)} ${result.siteData.dateTime[1]["$"].zone} 
    ${result.siteData.dateTime[1].day[0]["$"].name} 
    ${parseInt(result.siteData.dateTime[1].day[0]["_"])} 
    ${result.siteData.dateTime[1].month[0]["$"].name} 
    ${result.siteData.dateTime[1].year}`,
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

    hourlyOffset: result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset,

    hourly: [
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[0]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[0].temperature[0]["_"]  + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[0].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[0].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[1]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[1].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[1].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[1].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[2]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[2].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[2].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[2].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[3]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[3].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[3].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[3].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[4]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[4].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[4].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[4].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[5]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[5].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[5].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[5].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[6]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[6].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[6].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[6].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[7]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[7].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[7].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[7].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[8]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[8].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[8].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[8].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[9]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[9].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[9].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[9].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[10]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[10].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[10].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[10].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[11]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[11].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[11].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[11].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[12]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[12].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[12].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[12].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[13]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[13].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[13].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[13].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[14]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[14].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[14].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[14].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[15]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[15].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[15].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[15].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[16]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[16].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[16].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[16].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[17]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[17].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[17].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[17].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[18]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[18].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[18].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[18].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[19]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[19].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[19].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[19].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[20]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[20].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[20].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[20].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[21]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[21].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[21].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[21].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[22]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[22].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[22].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[22].condition[0])
      },
      {
        time: date.format(date.addHours(date.parse(result.siteData.hourlyForecastGroup[0].hourlyForecast[23]["$"].dateTimeUTC, "YYYYMMDDHHmmss", true), result.siteData.hourlyForecastGroup[0].dateTime[1]["$"].UTCOffset), "hA", true),
        temp: result.siteData.hourlyForecastGroup[0].hourlyForecast[23].temperature[0]["_"] + "°C",
        cond: result.siteData.hourlyForecastGroup[0].hourlyForecast[23].condition,
        icon: iconCondition(result.siteData.hourlyForecastGroup[0].hourlyForecast[23].condition[0])
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
// let rightnow = date.parse(result.siteData.dateTime[1].hour[0], "HH", true)
// console.log(result.siteData.dateTime[1].hour[0])
// console.log(rightnow)
// console.log(date.format(rightnow, "hA", true))
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

module.exports = { forecastData, iconCondition };
