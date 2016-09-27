const jwt = require('jsonwebtoken')

const jwtSecret = 'CJhHbcd9pXw3KJ'

const generateTokenData = (user) => {
  return { email: user.email }
}

const generateToken = (user) => {
  const tokenData = generateTokenData(user)
  return jwt.sign(tokenData, jwtSecret)
}

const decodeToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) reject(err)
      else resolve(decoded)
    })
  })
}

module.exports = {
  decodeToken,
  generateToken
}
