const UserService = require("../services/User.service");
const DefaultException = require("../exceptions/Default.expection");
const HttpStatus = require("../httpStatus/http.status");

const User = require("../models/User.model");
const RoleModel = require("../models/Role.model");

module.exports = {
  async create(req, res) {
    let {email, password, name, image = null} = req.body;
    let role = RoleModel.USER_NAME;

    const userModel = new User({email, password, name, image, role})

    let user = await UserService.create(userModel);

    if (user instanceof DefaultException) {
      return res.status(user.status).json(user);
    }

    return res.status(HttpStatus.OK_CODE).json(user)
  },
  async createAdmin(req, res) {
    let {email, password, name, image = null} = req.body;
    let role = RoleModel.ADMIN_NAME;

    const userModel = new User({email, password, name, image, role})

    let user = await UserService.create(userModel);

    if (user instanceof DefaultException) {
      return res.status(user.status).json(user);
    }

    return res.status(HttpStatus.OK_CODE).json(user)
  }
}