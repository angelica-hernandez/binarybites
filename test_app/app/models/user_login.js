// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Login = sequelize.define("users", {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    f_name: Sequelize.STRING,
    u_pass: {
        type: Sequelize.STRING,
        allowNull: false
    },
    u_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Syncs with DB
Login.sync();

module.exports = Login;