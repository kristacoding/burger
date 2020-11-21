// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(cb) {
      connection.query("SELECT * FROM burgers", function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(answer, cb) {
      connection.query("INSERT INTO burgers SET ?", [answer], function(err, result) {
        if (err) throw err;
        console.log("New Burger has been added");
        cb(result);
    });
    }, 

    updateOne: function(newBurger, oldburger, cb){   
      connection.query("UPDATE FROM burgers SET ? WHERE ?", [newBurger, oldburger], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;