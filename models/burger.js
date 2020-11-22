// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, cb) {
    orm.insertOne("burgers", cols, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, oldID, cb) {
    orm.updateOne("burgers", objColVals, oldID, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;