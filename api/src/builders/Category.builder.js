const Builder = require('./Builder');

class CategoryBuilder extends Builder {
  constructor(model) {
    let requiredProps = [
      'id',
      'name',
    ]

    super({ model, requiredProps })
  }
}

module.exports = CategoryBuilder
