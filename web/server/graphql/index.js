'use strict'

const graphql = require('graphql');

const Query = require('./Query')

module.exports = new graphql.GraphQLSchema({
  query: Query
});
