var express = require("express");
var burger = require("../models/burger.js");

module.exports = (express, burger) => {
    // create routes
    app.get("/", function(request, response){
        connection.query("SELECT * FROM burgers;", function(err, data){
            if  (err){
                throw err;
            }

            res.render("index", {burger: data});
        })
    });
}