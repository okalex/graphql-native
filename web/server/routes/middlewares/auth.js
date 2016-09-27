const passport = require('passport')
const session = require('../../util/session')

const loginHandler = passport.authenticate('local', {
  failureFlash: false
})

const sendAuthToken = (req, res, next) => {
  const token = session.generateToken(req.user)
  decodeToken(token)
    .catch( forbidden(res) )
    .then( res.send({ authToken: token }) )
}

const forbidden = (res) => res.status(403).send('Access forbidden')

const requireAuth = (req, res, next) => {
  const authHeader = req.get('Authorization')
  if (!authHeader) return forbidden()

  const authRegex = /TOKEN (\S+)/
  const match = authRegex.exec(authHeader)
  if (!match) return forbidden(res)

  const token = match[1]
  if (!token) return forbidden(res)

  decodeToken(token)
    .catch( forbidden(res) )
    .then( next() )
}

module.exports = {
  loginHandler,
  requireAuth,
  sendAuthToken
}
