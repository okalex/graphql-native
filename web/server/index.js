'use strict'

const express = require('express');
const graphQLHTTP = require('express-graphql');

const schema = require('./schema');

const app = express()

app.use(
  '/api',
  graphQLHTTP({
    schema: schema,
    pretty: true,
    graphiql: true
  })
);

app.use(express.static('dist'))

app.listen(3000);
console.log('GraphQL server running on http://localhost:3000/graphql');
