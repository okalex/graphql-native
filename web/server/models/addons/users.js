'use strict'

const findByEmail = users => (email, attrs) => {
  let options = {
    where: { email: email }
  }
  if (attrs) options.attributes = attrs
  return users.findOne(options)
}

module.exports = users => {
  return {
    findByEmail: findByEmail(users)
  }
}
