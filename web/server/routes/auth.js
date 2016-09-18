'use strict'
const passport = require('passport')
const session = require('express-session')
const uuid = require('node-uuid')
const LocalStrategy = require('passport-local').Strategy

const { users } = require('../models')
const passwordUtils = require('../util/password-utils')

const checkPassword = (email, password) => {
  return users.findByEmail(email, ['password_hash'])
    .then( user => passwordUtils.compare(password, user.password_hash) )
    .catch( err => false )
}

const strategy = new LocalStrategy( (email, password, done) => {
  checkPassword(email, password)
    .then( is_login_valid => {
      if (is_login_valid) return users.findByEmail(email)
      else throw new Error("Invalid username or password");
    })
    .then( user => done(null, user) )
    .catch( err => done(err) )
})
passport.use('local', strategy)

passport.serializeUser( (user, done) => done(null, user.id) )
passport.deserializeUser( (id, done) => {
  return users.findById(id)
    .then( (user, err) => done(err, user) )
})

module.exports = app => {
  app.use(
    session({
      genid: req => uuid.v4(),
      secret: 'Mcrdnn2yFcT9ez'
    })
  )

  app.use(passport.initialize())
  app.use(passport.session())

  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })
  )
}
