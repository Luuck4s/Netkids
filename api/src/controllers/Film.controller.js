const FilmService = require("../services/Film.service");
const DefaultException = require("../exceptions/Default.expection");
const HttpStatus = require("../httpStatus/http.status");

const Film = require("../models/Film.model");

module.exports = {
  async create(req, res){
    let {name , description, video, image, categories} = req.body;
    image = image || ""

    let filmData = new Film({name, description, video, image, categories});

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
  },
  async get(req, res){
   let {id} = req.params;

    let film = await FilmService.get({id});

    if(film instanceof  DefaultException){
      return res.status(film.status).json(film);
    }

    return res.status(HttpStatus.OK_CODE).json(film)
  },
  async delete(req, res){
    let {id} = req.params;

    let film = await FilmService.delete({id});

    if(film instanceof  DefaultException){
      return res.status(film.status).json(film);
    }

    return res.status(HttpStatus.OK_CODE).send()
  },
  async update(req, res){
    let {name , description, video, image, categories} = req.body;
    let {id} = req.params;

    let filmData = new Film({name, description, video, image, categories});

    let film = await FilmService.update({id, filmData});

    if(film instanceof  DefaultException){
      return res.status(film.status).json(film);
    }

    return res.status(HttpStatus.OK_CODE).json(film)
  },
}