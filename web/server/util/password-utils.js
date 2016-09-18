'use strict'

const bcrypt = require('bcrypt')
const config = require('../../config')

const compare = (password, hashed) => {
  return new Promise( (resolve, reject) => {
    bcrypt.compare(password, hashed, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

const hash = (password) => {
  return new Promise( (resolve, reject) => {
    bcrypt.hash(password, config.saltRounds, (err, hash) => {
      if (err) return reject(err)
      else return resolve(hash)
    })
  })
}

const hashSync = (password) => bcrypt.hashSync(password.toLowerCase(), config.saltRounds)

module.exports = {
  compare,
  hash,
  hashSync
}
