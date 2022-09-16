var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send(`<h1>Hello Root endpoint of NodeJS => 
  (EC2 configure with NGINX port 2000) </h1>`);
});

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
