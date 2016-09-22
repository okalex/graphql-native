const parseBody = (req, res, next) => {
  req.rawBody = ''
  req.setEncoding('utf8')

  req.on('data', function(chunk) {
    req.rawBody += chunk
  })

  req.on('end', function() {
    try {
      req.body = JSON.parse(req.rawBody)
    } catch(err) {
      console.error(err)
    } finally {
      next()
    }
  })
}

module.exports = parseBody
