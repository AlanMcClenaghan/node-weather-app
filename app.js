const request = require("request");

const url =
  "https://api.darksky.net/forecast/292a30b3f1df6840580323ecf4b511a3/37.8267,-122.4233";

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
