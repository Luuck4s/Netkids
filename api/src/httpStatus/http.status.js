class HttpStatus {
  static get OK_CODE() {
    return 200
  }

  static get OK_MESSAGE() {
    return 'Sucesso.'
  }

  static get CREATED_CODE() {
    return 201
  }

  static get CREATED_MESSAGE() {
    return 'Criado com sucesso.'
  }

  static get BAD_REQUEST_CODE() {
    return 400
  }

  static get BAD_REQUEST_MESSAGE() {
    return 'Parâmetro incorreto.'
  }

  static get FORBIDDEN_CODE() {
    return 403
  }

  static get FORBIDDEN_MESSAGE() {
    return 'Não é permitido prosseguir.'
  }

  static get NOT_FOUND_CODE() {
    return 404
  }

  static get NOT_FOUND_MESSAGE() {
    return 'Não encontrado.'
  }

  static get INTERNAL_ERROR_CODE() {
    return 500
  }

  static get INTERNAL_ERROR_MESSAGE() {
    return 'Erro interno.'
  }
}

module.exports = HttpStatus