const express = require('express')
const passport = require('passport')
const FileUtils = require('../util/file-utils')
const expressLogging = require('express-logging')
const logger = require('logops')

module.exports = app => {
  app.use(expressLogging(logger))

  app.use(passport.initialize())
  app.use(passport.session())

  // Custom routes
  const importRoute = file => require('./' + file)(app)
  FileUtils.forEachInDir(__dirname, 'index.js', importRoute)

  // Static files
  app.use(express.static(__dirname + '/../../dist'))
}
