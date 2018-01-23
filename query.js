function search() {
  var inputName = document.getElementById("txtName").value;
  var inputRegion = document.getElementById("cmbRegion").value;
  const http = require("http");

  var request = "https://" + inputRegion.toLowerCase() + ".api.riotgames.com/lol/summoner/v3/summoners/by-name/" + inputName;
  request = request.split(".com");
  var apiKey = "RGAPI-9999d83a-a126-43a0-a9b1-c83283cdf736";
  var options = {
    host: request[0] + ".com",
    port: 80,
    path: request[1] + "?api_key=" + apiKey,
    method: "POST"
  };

  var data = http.request(options, function(response) {
    console.log("STATUS: " + response.statusCode);
    console.log("HEADERS: " + JSON.stringify(response.headers));
    response.setEncoding("utf8");
    response.on("data", function(chunk) {
      return console.log("BODY: " + chunk);
    });
  }).end();

  document.write("<p>" + data.toString() + "</p>");
}

// node --inspect main.js https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick RGAPI-ad7693c0-a668-4529-9c95-6ab4a16f9fe3
