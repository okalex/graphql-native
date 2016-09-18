const fs = require('fs')
const path  = require('path')

const isDotFile = (file) => file.indexOf('.') === 0
const isThisFile = (file, thisFile) => file === thisFile
const isJsFile = (file) => file.slice(-3) === '.js'

const otherFilesInDir = (dirname, thisFile) => {
  return fs
    .readdirSync(dirname)
    .filter((file) => !isDotFile(file) && !isThisFile(file, thisFile) && isJsFile(file))
}

module.exports = {
  isDotFile,
  isThisFile,
  isJsFile,
  otherFilesInDir
}
