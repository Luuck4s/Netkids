class FilmModel {
  /**
   *
   * @param id
   * @param name
   * @param description
   * @param image
   * @param video
   * @param duration
   */
  constructor({id = null, name = null, description = null, image = null, video = null, duration = null}) {
    this._id = id
    this._name = name
    this._description = description
    this._image = image
    this._duration = duration
    this._video = video;
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

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

  get video() {
    return this._video;
  }

  set video(value) {
    this._video = value;
  }

  get duration() {
    return this._duration;
  }

  set duration(value) {
    this._duration = value;
  }
}

module.exports = FilmModel;