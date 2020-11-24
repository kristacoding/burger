// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ILv3Oc8!",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    return;
  }
  console.log("connected as id ");
});

// Export connection for our ORM to use.
module.exports = connection;