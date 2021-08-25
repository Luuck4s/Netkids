const { sign } = require("jsonwebtoken");
const { jwt } = require("../config/auth");

module.exports = {
  createToken: (data) => {
    const token = sign({}, jwt.secret, {
      subject: JSON.stringify(data),
      expiresIn: jwt.expiresIn,
    });
    return token;
  },
};
