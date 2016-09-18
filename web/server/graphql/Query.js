'use strict'

const graphql = require('graphql');

const User = require('./User')

const Query = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: User.queries.byId,
    users: User.queries.all
  }
});

module.exports = Query;
