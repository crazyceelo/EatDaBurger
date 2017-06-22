v

module.exports = (app, path) => {
var connection = require("./connection.js");
// selectAll()
// SELECT * FROM burgers
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { burgers: data });

  });
});

// InsertOne()
// INSERT INTO burgers

// updateOne()
// UPDATE burgers SET ? WHERE ?
} 
