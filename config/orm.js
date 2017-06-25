// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

// import the connection.js file to connect to mysql
var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


// objects for all sql statement functions (all, create, update)
// if there is time, use a delete object
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  create: function(table, cols, vals, cb){
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    })
  }
}

module.exports = orm;

// example cat orm and model
// var orm = {
//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
  //------
// var cat = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },


// selectAll()

// InsertOne()
// INSERT INTO burgers

// updateOne()
// UPDATE burgers SET ? WHERE ?

