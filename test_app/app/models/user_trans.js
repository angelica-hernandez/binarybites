// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Transaction = sequelize.define("user_trans", {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    restaurant: {
        type: Sequelize.STRING,
        allowNull: false
    },
    item: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// Syncs with DB
Transaction.sync();

module.exports = Transaction;