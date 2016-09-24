class FormStore {
  constructor() {
    this.state = {}
  }

  get(fieldName) {
    return this.state[fieldName]
  }

  getAll() {
    return this.state
  }

  set(fieldName, value) {
    this.state[fieldName] = value
  }
}

module.exports = FormStore
