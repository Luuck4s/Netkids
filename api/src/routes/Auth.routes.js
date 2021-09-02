const { Router } = require("express");
const AuthController = require("../controllers/Auth.controller");

const routes = Router();

routes.post("/api/v1/auth/user",  AuthController.login);

routes.post("/api/v1/auth/admin",  AuthController.loginAdmin);

module.exports = routes;