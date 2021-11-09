const { Router } = require("express");
const AccessMiddleware = require("../middlewares/Access.middleware");
const AvaliationController = require("../controllers/Avaliation.controller");

const routes = Router();

routes.post("/api/v1/avaliation", AccessMiddleware.validateAccess, AvaliationController.crateOrUpdate);

module.exports = routes;