// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(cb) 
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, cb) {
    orm.insertOne(cols, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, oldID, cb) {
    orm.updateOne(objColVals, oldID, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;