const { Router } = require("express");
const CategoryController = require("../controllers/Category.controller");
const AdminMiddleware = require("../middlewares/Admin.middleware");

const routes = Router();

routes.post("/api/v1/category/create",  AdminMiddleware.validateAdmin, CategoryController.create);

routes.get("/api/v1/category",  CategoryController.list);

module.exports = routes;