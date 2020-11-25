// Set up MySQL connection.
var mysql = require("mysql");
var connection;

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

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(prcess.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    username: "eiikccv3im6so4ed",
    password: "zs2sm335hnr103zg",
    host: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    database:"hj6or5hx3kpm0ubx" 
  });
};

connection.connect();


// Export connection for our ORM to use.
module.exports = connection;