// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "ILv3Oc8!",
//   database: "burgers_db"
//  });

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(prcess.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ILv3Oc8!",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    return;
  }
  console.log("connected as id ");
});

// connection.connect();


// Export connection for our ORM to use.
module.exports = connection;