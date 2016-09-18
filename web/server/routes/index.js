const express = require('express');
const FileUtils = require('../util/file-utils')

module.exports = (app) => {
  // Custom routes
  FileUtils
    .otherFilesInDir(__dirname, 'index.js')
    .forEach(file => require('./' + file)(app))

  // Static files
  app.use(express.static(__dirname + '/../../dist'))
}
