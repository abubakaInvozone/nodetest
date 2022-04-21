var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send(`<h3>Hello (EC2 NGINX) </h3>`);
});

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
