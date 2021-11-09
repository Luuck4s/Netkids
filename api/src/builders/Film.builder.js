const Builder = require('./Builder');
const CategoryBuilder = require("./Category.builder");

class FilmBuilder extends Builder {
  constructor(model) {
    let requiredProps = [
      'id',
      'name',
      'image',
      'description',
      'categories',
      'avaliation'
    ]

    super({ model, requiredProps })
  }

  build() {
    let object = {}
    this.__requiredProps.map((prop) => {
      let builder;

      switch (prop) {
        case 'categories':
          object[prop] = this.__model[prop].map((resource) => {
            builder = new CategoryBuilder(resource)
            return builder.build()
          })
          break
        default:
          object[prop] = this.__model[prop]
      }
    })

    return object
  }
}

module.exports = FilmBuilder
