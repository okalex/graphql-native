const express = require('express');
const bodyParser = require('body-parser')
const FileUtils = require('../util/file-utils')

module.exports = app => {
  // Parse body
  app.use(bodyParser.urlencoded({ extended: true }))

  // Custom routes
  const importRoute = file => require('./' + file)(app)
  FileUtils.forEachInDir(__dirname, 'index.js', importRoute)

  // Static files
  app.use(express.static(__dirname + '/../../dist'))
}
