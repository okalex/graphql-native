'use strict'

const express = require('express');
const graphQlHttp = require('express-graphql');

const graphQlSchema = require('./graphql');

const app = express();

app.use(
  '/api',
  graphQlHttp({
    schema: graphQlSchema,
    pretty: true,
    graphiql: true
  })
);

app.use(express.static('dist'))

app.listen(3000);
console.log('GraphQL server running on http://localhost:3000/api');
