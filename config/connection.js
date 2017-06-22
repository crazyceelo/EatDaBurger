// var mysql = require("mysql");

module.exports = (app, path) => {
    var mysql = require("mysql");
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    })
}