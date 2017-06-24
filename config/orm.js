// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.
var connection = require("./connection.js");

module.exports = {
// selectAll()
connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { burgers: burger });
  });

// InsertOne()
// INSERT INTO burgers

// updateOne()
// UPDATE burgers SET ? WHERE ?
} 
