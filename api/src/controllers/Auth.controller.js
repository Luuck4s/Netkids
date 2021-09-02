const AuthService = require("../services/Auth.service");
const DefaultException = require("../exceptions/Default.expection");
const HttpStatus = require("../httpStatus/http.status");


module.exports = {
  async login(req, res){
   let {email , password} = req.body;

    let user = await AuthService.login({email , password});

    if(user instanceof  DefaultException){
      return res.status(user.status).json(user);
    }

    return res.status(HttpStatus.OK_CODE).json(user)
  },
  async loginAdmin(req, res){
    let {email , password} = req.body;

    let userAdmin = await AuthService.loginAdmin({email , password});

    if(userAdmin instanceof  DefaultException){
      return res.status(userAdmin.status).json(userAdmin);
    }

    return res.status(HttpStatus.OK_CODE).json(userAdmin)
  }
}