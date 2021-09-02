const bcrypt = require("bcrypt");
const {verify, decode} = require("jsonwebtoken");

const prisma = require("../lib/prisma");
const {jwt} = require("../config/auth");

const UserBuilder = require("../builders/User.builder");
const HttpStatus = require("../httpStatus/http.status");
const DefaultException = require("../exceptions/Default.expection");
const {createToken} = require("../utils/createToken");

const RoleModel = require("../models/Role.model");


module.exports = {
  async login({email, password}) {
    let user = await prisma.user.findFirst({
      where: {
        email: email,
        roleId: RoleModel.USER_ID
      },
      include: {
        role: true
      }
    });

    if (!user) {
      return new DefaultException({
        title: "Combinação de email e senha não válidas",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      return new DefaultException({
        title: "Combinação de email e senha não válidas",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    let data = {
      ...user,
      role: user.role.name
    }

    let userBuilder = new UserBuilder(data).build();

    let token = await createToken(userBuilder);
    return {token}
  },
  async loginAdmin({email, password}) {
    let user = await prisma.user.findFirst({
      where: {
        email: email,
        roleId: RoleModel.ADMIN_ID
      },
      include: {
        role: true
      }
    });

    if (!user) {
      return new DefaultException({
        title: "Combinação de email e senha não válidas",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      return new DefaultException({
        title: "Combinação de email e senha não válidas",
        details: HttpStatus.FORBIDDEN_MESSAGE,
        statusCode: HttpStatus.FORBIDDEN_CODE
      })
    }

    let data = {
      ...user,
      role: user.role.name
    }

    let userBuilder = new UserBuilder(data).build();

    let token = await createToken(userBuilder);
    return {token}
  }
}