const Builder = require('./Builder');

class UserBuilder extends Builder {
  constructor(model) {
    let requiredProps = [
      'id',
      'name',
      'email',
      'image',
      'role',
    ]

    super({ model, requiredProps })
  }
}

module.exports = UserBuilder
