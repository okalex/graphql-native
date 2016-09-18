'use strict';

var fs          = require('fs');
var path        = require('path');
var Sequelize   = require('sequelize');
var basename    = path.basename(module.filename);
var config      = require(__dirname + '/../../config')
var db          = {};
const FileUtils = require('../util/file-utils')

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const getModel = (file) => sequelize['import'](path.join(__dirname, file))

const importModel = (file) => {
  var model = getModel(file);
  db[model.name] = model;
}

FileUtils.forEachInDir(__dirname, basename, importModel)
  // .catch( err => throw new Error("Could not load all models") )

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const addonsDir = '/addons/'
const injectAddons = (addonsFile) => {
  let model = getModel(addonsFile)
  let addons = require(__dirname + addonsDir + addonsFile)(model)
  Object.assign(db[model.name], addons)
}
FileUtils.forEachInDir(__dirname + addonsDir, null, injectAddons)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
