const passport = require('passport')
const jwt = require('jsonwebtoken')

const jwtSecret = 'CJhHbcd9pXw3KJ'

const loginHandler = passport.authenticate('local', {
  failureFlash: false
})

const genTokenData = (user) => {
  return { email: user.email }
}

const sendAuthToken = (req, res, next) => {
  const tokenData = genTokenData(req.user)
  const token = jwt.sign(tokenData, jwtSecret)
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return forbidden(res)
    else res.send({ authToken: token })
  })
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

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return forbidden(res)
    else next()
  })
}

module.exports = {
  loginHandler,
  requireAuth,
  sendAuthToken
}
