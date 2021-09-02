const HttpStatus = require("../httpStatus/http.status");
const DefaultException = require("../exceptions/Default.expection");
const {verify, decode} = require("jsonwebtoken");

const prisma = require("../lib/prisma");
const RoleModel = require("../models/Role.model");


module.exports = {
  validateAdmin(req, res, next){
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
      let admin = decode(token)

      let hasAccess = prisma.user.findFirst({
        where: {
          id: admin.id,
          roleId: RoleModel.ADMIN_ID
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
