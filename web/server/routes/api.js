'use strict'

const graphQlHttp = require('express-graphql');
const graphQlSchema = require('../graphql');

module.exports = app => {
  app.use(
    '/api',
    graphQlHttp({
      schema: graphQlSchema,
      pretty: true,
      graphiql: true
    })
  )
}
