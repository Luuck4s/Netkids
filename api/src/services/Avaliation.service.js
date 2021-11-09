const prisma = require("../lib/prisma");
const HttpStatus = require("../httpStatus/http.status");
const DefaultException = require("../exceptions/Default.expection");

module.exports = {
  async createOrUpdate({filmId, userId, stars}) {

    if(stars > 5){
      return new DefaultException({
        title: "O Máximo de Estrelas é 5",
        details: HttpStatus.BAD_REQUEST_MESSAGE,
        statusCode: HttpStatus.BAD_REQUEST_CODE
      })
    }


    const alreadyExistsAvaliation = await prisma.avaliation.findFirst({
      where: {
        userId: Number(userId),
        filmId: Number(filmId),
      }
    })

    if(alreadyExistsAvaliation !== null){
      return await prisma.avaliation.update({
        data: {
          stars: stars
        },
        where: {
          id: alreadyExistsAvaliation.id
        }
      });
    }else {
      return await prisma.avaliation.create({
        data: {
          stars: stars,
          userId: Number(userId),
          filmId: Number(filmId),
        },
      });
    }
  },
}