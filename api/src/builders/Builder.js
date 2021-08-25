class Builder {
  constructor({ model, requiredProps }) {
    this.__model = model
    this.__requiredProps = requiredProps
  }

  add(props) {
    if (!Array.isArray(props)) {
      return this
    }

    let keysInModel = Object.keys(this.__model)

    keysInModel = keysInModel.map((key) => {
      return key.replace('_', '')
    })

    props.map((prop) => {
      if (!keysInModel.includes(prop)) {
        return this
      }

      if (this.__requiredProps.includes(prop)) {
        return this
      }

      this.__requiredProps.push(prop)
    })

    return this
  }

  remove(prop) {
    let indexProp = this.__requiredProps.indexOf(prop)
    if (indexProp > -1) {
      this.__requiredProps.splice(indexProp, 1)
    }
    return this
  }

  build() {
    let object = {}
    this.__requiredProps.map((prop) => {
      object[prop] = this.__model[prop]
    })

    return object
  }
}

module.exports = Builder