// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Registered = sequelize.define("user_regs", {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    manager: {
        type: Sequelize.STRING,
        allowNull: false
    },
    registered: Sequelize.BOOLEAN
});

// Syncs with DB
Registered.sync();

module.exports = Registered;