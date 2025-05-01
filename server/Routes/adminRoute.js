const express = require("express");
const route = express.Router();
const AdminController = require("../Controller/adminController");


route.post("/adminlogin", AdminController.Adminlogin);









module.exports = route;