const { Router } = require("express");
const CategoryController = require("../controllers/Category.controller");
const AdminMiddleware = require("../middlewares/Admin.middleware");

const routes = Router();

routes.post("/api/v1/category", AdminMiddleware.validateAdmin, CategoryController.create);
routes.put("/api/v1/category/:id", AdminMiddleware.validateAdmin, CategoryController.update);
routes.delete("/api/v1/category/:id",AdminMiddleware.validateAdmin, CategoryController.delete);
routes.get("/api/v1/category/:id",AdminMiddleware.validateAdmin, CategoryController.get);
routes.get("/api/v1/category", CategoryController.list);

module.exports = routes;