'use strict'

const gql = require('./types')
const Root = require('./Root')

module.exports = new gql.Schema({
  query: Root.Query,
  mutation: Root.Mutation
});
