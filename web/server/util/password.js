'use strict'

const bcrypt = require('bcrypt')

const config = require('../../config')

const hash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, config.saltRounds, (err, hash) => {
      if (err) reject(err)
      else resolve(hash)
    })
  }) 
}

const hashSync = (password) => bcrypt.hashSync(password.toLowerCase(), config.saltRounds)

module.exports = {
  hash,
  hashSync
}
