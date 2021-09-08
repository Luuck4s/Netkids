const { Router } = require("express");
const FilmController = require("../controllers/Film.controller");
const AdminMiddleware = require("../middlewares/Admin.middleware");
const AccessMiddleware = require("../middlewares/Access.middleware");

const routes = Router();

// Admin Routes
routes.post("/api/v1/admin/film", AdminMiddleware.validateAdmin, FilmController.create);

routes.get("/api/v1/film",  FilmController.list);
routes.get("/api/v1/film/:id",  AccessMiddleware.validateAccess,FilmController.get);

module.exports = routes;