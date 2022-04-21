var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send(`<h1>Hello AbuBakar(EC2 configure with NGINX port) </h1>`);
});

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
