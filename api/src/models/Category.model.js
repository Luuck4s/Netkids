class CategoryModel {
  /**
   *
   * @param id
   * @param name
   */
  constructor({id = null, name = null}) {
    this._id = id
    this._name = name
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

module.exports = CategoryModel;