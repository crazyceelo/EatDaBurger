var express = require("express");
var override = require("method-override");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// view route require
var mysqlConnect = require("./config/connection.js");
// api route require

app.listen(PORT, function(){
    console.log("app listening on PORT " + PORT);
})