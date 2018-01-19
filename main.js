const http = require("http");
var request = process.argv[2];
request = request.split(".com");
var apiKey = process.argv[3];
var options = {
  host: request[0] + ".com",
  port: 80,
  path: request[1] + "?api_key=" + apiKey,
  method: "POST"
};

http.request(options, function(response) {
  console.log("STATUS: " + response.statusCode);
  console.log("HEADERS: " + JSON.stringify(response.headers));
  response.setEncoding("utf8");
  response.on("data", function(chunk) {
    return console.log("BODY: " + chunk);
  });
}).end();

// node --inspect main.js https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick RGAPI-ad7693c0-a668-4529-9c95-6ab4a16f9fe3
