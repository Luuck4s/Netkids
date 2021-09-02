const { Router } = require("express");
const userController = require("../controllers/User.controller");

const routes = Router();

routes.post("/api/v1/user/register",  userController.create);

routes.post("/api/v1/admin/register",  userController.createAdmin);


module.exports = routes;