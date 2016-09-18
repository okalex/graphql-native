const fs = require('fs')
const path  = require('path')

const isDotFile = (file) => file.indexOf('.') === 0
const isThisFile = (file, thisFile) => file === thisFile
const isJsFile = (file) => file.slice(-3) === '.js'

const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, null, (err, files) => {
      if (err) return reject(err)
      else return resolve(files)
    })
  })
}

const othersInDir = (dirname, thisFile) => {
  let files = fs.readdirSync(dirname)
  return files.filter( file => !isDotFile(file) && !isThisFile(file, thisFile) && isJsFile(file))
}

const forEachInDir = (dirname, thisFile, fn) => {
  othersInDir(dirname, thisFile).forEach(fn) 
}

module.exports = {
  forEachInDir,
  isDotFile,
  isThisFile,
  isJsFile,
  othersInDir,
  readdir
}
