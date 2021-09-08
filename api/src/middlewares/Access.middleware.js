const HttpStatus = require("../httpStatus/http.status");
const DefaultException = require("../exceptions/Default.expection");
const {verify, decode} = require("jsonwebtoken");

const prisma = require("../lib/prisma");


module.exports = {
  validateAccess(req, res, next){
    if(!req.headers.authorization){
      let error =  new DefaultException({
        title: "Usuário não autorizado",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })

      res.status(error.status).json(error)
    }

    let token = req.headers.authorization

    try{
      let user = decode(token)

      let hasAccess = prisma.user.findFirst({
        where: {
          id: user.id
        }
      })

      if(hasAccess){
        next();
      }else {
        let error =  new DefaultException({
          title: "Usuário não autorizado",
          details: HttpStatus.FORBIDDEN_MESSAGE,
          statusCode: HttpStatus.FORBIDDEN_CODE
        })

        res.status(error.status).json(error)
      }
    }catch(err){
      let error =  new DefaultException({
        title: "Usuário não autorizado",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })

      res.status(error.status).json(error)
    }
  }
}
