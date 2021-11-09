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
  async update({ id ,name}) {
    let category = await prisma.category.findFirst({
      where: {
        name: name,
        NOT: {
          id: Number(id)
        }
      }
    });

    if (category) {
      return new DefaultException({
        title: "Categoria já existente",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name
      }
    })

    category = await prisma.category.findFirst({
      where: {
        id: Number(id)
      }
    });


    let data = {
      ...category
    }

    return new CategoryBuilder(data).build();
  },
  async delete({ id }) {
    let categoryHasFilms = await prisma.film_Category.findFirst({
      where: {
        categoryId: Number(id)
      }
    });

    if (categoryHasFilms) {
      return new DefaultException({
        title: "Categoria tem filmes associados",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    return await prisma.category.delete({
      where: {
        id: Number(id),
      },
    })
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
  },
  async get({ id }) {
    let category = await prisma.category.findFirst({
      where: {
        id: Number(id)
      }
    });

    if (!category) {
      return new DefaultException({
        title: "Categoria não existente",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    let data = {
      ...category
    }

    return new CategoryBuilder(data).build();
  },
}