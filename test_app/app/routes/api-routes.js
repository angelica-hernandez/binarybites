// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Login = require("../models/user_login");
var Register = require("../models/user_register");
var Transaction = require("../models/user_trans");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/food_count",function(req,res){
        Transaction.findAll({
            where: {
              restaurant: req.query.restaurant,
              item: req.query.item
            }
          }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/login",function(req,res){
        Login.findAll({
            where: {
              u_pass: req.query.u_pass,
              u_email: req.query.u_email
            }
          }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/registered",function(req,res){
        Register.findAll({
            where: {
              user_id: req.query.user_id,
              manager: req.query.manager
            }
          }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/user_reg",function(req,res){
        console.log("Login:");
        // console.log(req.body);
        Login.create({
            f_name: req.query.f_name,
            u_pass: req.query.u_pass,
            u_email: req.query.u_email,
            role: req.query.role
        }).then(function(results) {
            console.log("Success");
            res.end();
        });
    });

    app.post("/api/rest_reg",function(req,res){
        console.log("Login:");
        console.log(req.query);
        Register.create({
            user_id: req.query.user_id,
            manager: req.query.manager
        }).then(function(results) {
            console.log("Success");
            res.end();
        });
    });

    app.post("/api/transaction",function(req,res){
        console.log("Login:");
        console.log(req.query);
        Transaction.create({
            user_id: req.query.user_id,
            restaurant: req.query.restaurant,
            item: req.query.item
        }).then(function(results) {
            console.log("Success");
            res.end();
        });
    });

    app.put("/api/rest_reg", function (req, res, next) {
        Register.update(
          {registered: req.query.bool},
          {where: {
            user_id: req.query.user_id, 
            manager: req.query.manager
          }}
        )
        .then(function(rowsUpdated) {
          res.json(rowsUpdated);
        })
        .catch(next)
       })

};
