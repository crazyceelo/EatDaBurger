// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

// import the connection.js file to connect to mysql
var connection = require("./connection.js");

// objects for all sql statement functions (all, create, update)
// if there is time, use a delete object
var orm = {
  all: connection.query("SELECT * FROM burgers;", function(err, data){
    if(err){
      throw err;
    }
    console.log(data);
  })
}

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

