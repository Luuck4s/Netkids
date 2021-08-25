const { Router } = require("express");
const userController = require("../controllers/User.controller");

const routes = Router();

routes.post("/api/v1/user/register",  userController.create);


module.exports = routes;