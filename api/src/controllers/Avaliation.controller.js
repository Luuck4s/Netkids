const DefaultException = require("../exceptions/Default.expection");
const HttpStatus = require("../httpStatus/http.status");
const AvaliationService = require("../services/Avaliation.service");
const {decode} = require("jsonwebtoken");

module.exports = {
  async crateOrUpdate(req, res){
   let {filmId, stars} = req.body;
   let token = req.headers.authorization;
   let user = decode(token);
   user = JSON.parse(user.sub);

    let availiation = await AvaliationService.createOrUpdate({userId: user.id, filmId, stars});

    if(availiation instanceof  DefaultException){
      return res.status(availiation.status).json(availiation);
    }

    return res.status(HttpStatus.OK_CODE).send();
  },
}