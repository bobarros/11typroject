//using this because of heroku

const express = require("express");
const path = require("path");
const app = express();
const compression = require("compression");

app.use(compression({ filter: shouldCompress }));
function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
}

app.use(express.static("./_site"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/_site/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/_site/404/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Hosted at port: " + (process.env.PORT || 3000));
});
