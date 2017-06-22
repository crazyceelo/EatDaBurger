var mysql = require("mysql");

module.exports = (mysql) => {

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    })
}