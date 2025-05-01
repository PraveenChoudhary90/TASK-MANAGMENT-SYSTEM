const express = require("express");
const route = express.Router();
const UserController = require("../Controller/UserController");

route.post("/userlogin", UserController.Userlogin);
route.get("/userauthenticate", UserController.UserAuthonticate);








module.exports = route;