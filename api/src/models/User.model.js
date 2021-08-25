class UserModel {
  /**
   *
   * @param id
   * @param name
   * @param email
   * @param image
   * @param role
   * @param password
   */
  constructor({id = null, name = null, email = null, image = null, role = null, password = null}) {
    this._id = id
    this._name = name
    this._email = email
    this._image = image
    this._role = role
    this._password = password;
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

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

  get role() {
    return this._role;
  }

  set role(value) {
    this._role = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }
}

module.exports = UserModel;