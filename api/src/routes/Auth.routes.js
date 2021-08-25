const { Router } = require("express");
const AuthController = require("../controllers/Auth.controller");

const routes = Router();

routes.post("/api/v1/auth/user",  AuthController.login);

module.exports = routes;