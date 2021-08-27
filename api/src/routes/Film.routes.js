const { Router } = require("express");
const FilmController = require("../controllers/Film.controller");

const routes = Router();

// Admin Routes
routes.post("/api/v1/admin/film",  FilmController.create);


routes.get("/api/v1/film",  FilmController.list);

module.exports = routes;