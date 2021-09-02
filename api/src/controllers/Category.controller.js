
const CategoryService = require("../services/Category.service");
const DefaultException = require("../exceptions/Default.expection");
const HttpStatus = require("../httpStatus/http.status");


module.exports = {
  async create(req, res){
   let {name} = req.body;

    let category = await CategoryService.create({name});

    if(category instanceof  DefaultException){
      return res.status(category.status).json(category);
    }

    return res.status(HttpStatus.OK_CODE).json(category)
  },
  async list(req, res){
    let categories = await CategoryService.list();

    if(categories instanceof  DefaultException){
      return res.status(categories.status).json(categories);
    }

    return res.status(HttpStatus.OK_CODE).json(categories)
  },
}