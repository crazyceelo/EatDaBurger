// Create the router for the app,
// import express and set up router function
var express = require("express");
var router = express.Router();

// import models burger.js
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

// export routes for server.js to use
module.exports = router;
