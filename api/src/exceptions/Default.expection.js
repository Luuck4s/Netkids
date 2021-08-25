class DefaultExpection {
  constructor({ title, detail, statusCode }) {
    this.title = title
    this.detail = detail
    this.status = statusCode

    return this
  }
}

module.exports = DefaultExpection;