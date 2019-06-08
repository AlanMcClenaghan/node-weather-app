const request = require("request");

const url =
  "https://api.darksky.net/forecast/292a30b3f1df6840580323ecf4b511a3/37.8267,-122.4233?units=si";

// request({ url, json: true }, (error, response) => {
//   // const data = JSON.parse(response.body);
//   // console.log(data.currently);

//   // Using json:true, request parses the data
//   // console.log(response.body.currently);

//   // Challenge
//   const res = response.body;
//   const currently = res.currently;
//   const dailySummary = res.daily.data[0].summary;
//   const temperate = currently.temperature;
//   const chanceOfRain = currently.precipProbability;
//   console.log(
//     `${dailySummary} It is currently ${temperate} celcius out. There is a ${chanceOfRain}% chance of rain.`
//   );
// });

// Geocoding Challenge
const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxhbjcyIiwiYSI6ImNqd25vOHk1YTE4ZzM0M3BqYmtwbjV2djIifQ.mM9Ld5QqDMWPWn4eOb65iw";

request({ url: geocodeURL, json: true }, (error, response) => {
  const center = response.body.features[0].center;
  const latitude = center[1];
  const longitude = center[0];
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
});
