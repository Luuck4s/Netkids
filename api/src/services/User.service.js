const bcrypt = require("bcrypt");
const {verify, decode} = require("jsonwebtoken");
const HttpStatus = require("../httpStatus/http.status");
const DefaultException = require("../exceptions/Default.expection");

const prisma = require("../lib/prisma");
const {jwt} = require("../config/auth");
const {createToken} = require("../utils/createToken");

const UserBuilder = require("../builders/User.builder");

module.exports = {
  async create(UserData) {
    let user = await prisma.user.findFirst({
      where: {
        email: UserData.email
      }
    });

    if (user) {
      return new DefaultException({
        title: "Usuário já cadastrado",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    let roleId = await prisma.role.findFirst({
      where: {
        name: UserData.role
      }
    })

    UserData.password = bcrypt.hashSync(UserData.password, 10);

    try {
      await prisma.user.create({
        data: {
          email: UserData.email,
          password: UserData.password,
          name: UserData.name,
          image: UserData.image,
          roleId: roleId.id
        }
      })
    } catch (error) {
      console.log(error)

      return new DefaultException({
        title: "Erro na criação do usuário",
        details: HttpStatus.INTERNAL_ERROR_MESSAGE,
        statusCode: HttpStatus.INTERNAL_ERROR_CODE
      })
    }

    user = await prisma.user.findFirst({
      where: {
        email: UserData.email
      },
      include: {
        role: true
      }
    })

    let data = {
      ...user,
      role: user.role.name
    }

    let userBuilder = new UserBuilder(data).build();

    let token = await createToken(userBuilder);

    return {token}
  }
}