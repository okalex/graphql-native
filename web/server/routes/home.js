const { requireAuth } = require('./middlewares/auth')

module.exports = app => {
  app.get('/home',
    requireAuth,
    (req, res) => res.send('Hello')
  )
}
