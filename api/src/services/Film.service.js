const HttpStatus = require("../httpStatus/http.status");
const DefaultException = require("../exceptions/Default.expection");

const prisma = require("../lib/prisma");

const FilmBuilder = require("../builders/Film.builder")

module.exports = {
  async create(filmData) {
    let film

    if (!filmData.name || !filmData.description || !filmData.video) {
      return new DefaultException({
        title: "Envie os parâmetros necessários para criação do filme",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    try {
      film = await prisma.film.create({
        data: {
          name: filmData.name,
          description: filmData.description,
          image: filmData.image,
          duration: filmData.duration,
          video: filmData.video,
        }
      })
    } catch (error) {
      console.log(error)

      return new DefaultException({
        title: "Erro na criação do filme",
        details: HttpStatus.INTERNAL_ERROR_MESSAGE,
        statusCode: HttpStatus.INTERNAL_ERROR_CODE
      })
    }

    let filmBuilder = new FilmBuilder(film).remove("categories");

    return filmBuilder.build();
  },
  /**
   *
   * @param filters Pode filtrar por categories
   * @returns {Promise<DefaultExpection|*>}
   */
  async list(filters = {}) {
    let films = []
    let where = {}

    if (filters.categories) {
      where.Film_Category = {
        some: {
          id: {
            in: filters.categories
          }
        }
      }
    }

    try {
      films = await prisma.film.findMany({
        where,
        include: {
          Film_Category: {
            include: {
              category: true
            }
          },
        },

      })
    } catch (error) {
      console.log(error)

      return new DefaultException({
        title: "Erro na busca de filmes",
        details: HttpStatus.INTERNAL_ERROR_MESSAGE,
        statusCode: HttpStatus.INTERNAL_ERROR_CODE
      })
    }


    films = films.map(film => {
      let filmData = {
        ...film,
        categories: film.Film_Category
      }

      if (filmData.categories[0]) {
        filmData.categories = filmData.categories.map(cat => {
          return {
            id: cat.category.id,
            name: cat.category.name
          }
        })
      }

      let filmBuilder = new FilmBuilder(filmData);
      return filmBuilder.build();
    })

    return films
  }
}