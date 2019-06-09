const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/292a30b3f1df6840580323ecf4b511a3/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(
        undefined,
        `${response.body.daily.data[0].summary} It is currently ${
          response.body.currently.temperature
        } celcius out. There is a ${
          response.body.currently.precipProbability
        }% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
