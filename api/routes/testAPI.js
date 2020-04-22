/* var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router; */

var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function (req, res, next) {
  request({
    uri: "https://covidtracking.com/api/states",
  }).pipe(res);
});

router.get("/states/daily", function (req, res, next) {
  request({
    uri: "https://covidtracking.com/api/v1/states/daily.json",
  }).pipe(res);
});

module.exports = router;
