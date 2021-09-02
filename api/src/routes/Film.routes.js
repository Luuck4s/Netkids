const { Router } = require("express");
const FilmController = require("../controllers/Film.controller");
const AdminMiddleware = require("../middlewares/Admin.middleware");

const routes = Router();

// Admin Routes
routes.post("/api/v1/admin/film", AdminMiddleware.validateAdmin, FilmController.create);

routes.get("/api/v1/film",  FilmController.list);
routes.get("/api/v1/film/:id",  FilmController.get);

module.exports = routes;