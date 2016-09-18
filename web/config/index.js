const config = require('./config.json')[process.env.NODE_ENV]
if (!config) {
  throw Error('Could not load config, check that NODE_ENV is set correctly.')
}
module.exports = config
