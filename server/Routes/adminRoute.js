const express = require("express");
const route = express.Router();
const AdminController = require("../Controller/adminController");


route.post("/adminlogin", AdminController.Adminlogin);
route.post("/adduser", AdminController.UserInsert);
route.get("/userdisplay", AdminController.UserDisplay);
route.post("/AssignTask", AdminController.AssignTask);
route.get("/TaskDisplay", AdminController.TaskDsiplay);
route.post("/deletedata", AdminController.TaskDelete);
route.post("/ShowFromData", AdminController.ShowUpdateFromData);
route.post("/UpdateTask", AdminController.UpdateTask);









module.exports = route;