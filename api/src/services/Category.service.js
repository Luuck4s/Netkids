const prisma = require("../lib/prisma");

const CategoryBuilder = require("../builders/Category.builder");
const HttpStatus = require("../httpStatus/http.status");
const DefaultException = require("../exceptions/Default.expection");
const FilmBuilder = require("../builders/Film.builder");

module.exports = {
  async create({name}) {
    let category = await prisma.category.findFirst({
      where: {
        name: name
      }
    });

    if (category) {
      return new DefaultException({
        title: "Categoria já existente",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    await prisma.category.create({
      data: {
        name: name
      }
    })

    category = await prisma.category.findFirst({
      where: {
        name: name
      }
    });


    let data = {
      ...category
    }

    return new CategoryBuilder(data).build();
  },
  async list(){
    let categories = []

    try{
      categories = await prisma.category.findMany({
        include: {
          Film_Category: {
            include: {
              film: true
            }
          }
        },
      })
    }catch(error){
      console.log(error)
      return new DefaultException({
        title: "Erro na busca de categorias",
        details: HttpStatus.INTERNAL_ERROR_MESSAGE,
        statusCode: HttpStatus.INTERNAL_ERROR_CODE
      })
    }

    categories = categories.map(category =>  {
      let categoryData = {
        ...category,
      }
      let categoryBuilder = new CategoryBuilder(categoryData).build();

      if(category.Film_Category && category.Film_Category[0]){
        categoryBuilder.films = category.Film_Category.map(filmCat => {
          let filmBuilder = new FilmBuilder(filmCat.film).remove("categories");
          return filmBuilder.build();
        })
      }

      return categoryBuilder;
    })

    return categories
  }
}