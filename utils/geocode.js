const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYWxhbjcyIiwiYSI6ImNqd25vOHk1YTE4ZzM0M3BqYmtwbjV2djIifQ.mM9Ld5QqDMWPWn4eOb65iw";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (response.body.features.length === 0) {
      callback(
        "No matching result for that location. Please try again.",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
