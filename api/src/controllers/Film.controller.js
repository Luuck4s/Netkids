const FilmService = require("../services/Film.service");
const DefaultException = require("../exceptions/Default.expection");
const HttpStatus = require("../httpStatus/http.status");

const Film = require("../models/Film.model");

module.exports = {
  async create(req, res){
    let {name , description, duration, video, image} = req.body;

    let filmData = new Film({name, description, duration,video, image});

    let film = await FilmService.create(filmData);

    if(film instanceof  DefaultException){
      return res.status(film.status).json(film);
    }

    return res.status(HttpStatus.OK_CODE).json(film)
  },
  async list(req, res){
    let categories = req.query.categories;

    if(categories){
      categories = categories.split(",").map(cat => Number(cat.trim()))
    }

    let filters = {
      categories
    }

    let films = await FilmService.list(filters);

    if(films instanceof  DefaultException){
      return res.status(films.status).json(films);
    }

    return res.status(HttpStatus.OK_CODE).json(films)
  }
}