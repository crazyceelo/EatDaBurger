// setup the code to connect Node to MySQL.
// Export the connection.

// require the mysql connection
var mysql = require("mysql");

// set up mysql connection.
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

// connect to mysql
connection.connect(function(err){
    // display error if the connection fails.
    if (err){
        console.error("error connecting: "+ err.stack);
        return;
    }
    // otherwise, if successfull, display the connection id.
    else{
        console.log("connected as id " + connection.threadId);
    }
});

// export the connection for ORM to use.
module.exports = connection;
