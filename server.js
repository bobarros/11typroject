//using this because of heroku

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./_site"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/_site/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/_site/404/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Hosted at port: ' + (process.env.PORT || 3000))
});
