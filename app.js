const request = require("request");
const geocode = require("./utils/geocode");

// const url =
//   "https://api.darksky.net/forecast/292a30b3f1df6840580323ecf4b511a3/37.8267,-122.4233?units=si";

// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service.");
//   } else if (response.body.error) {
//     console.log(response.body.error);
//   } else {
//     const res = response.body;
//     const currently = res.currently;
//     const dailySummary = res.daily.data[0].summary;
//     const temperate = currently.temperature;
//     const chanceOfRain = currently.precipProbability;
//     console.log(
//       `${dailySummary} It is currently ${temperate} celcius out. There is a ${chanceOfRain}% chance of rain.`
//     );
//   }
// });

geocode("London", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
