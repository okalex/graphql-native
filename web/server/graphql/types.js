'use strict'

const graphql = require('graphql')
const GraphQLDate = require('graphql-date')

const types = {
  Date:    GraphQLDate,
  Int:     graphql.GraphQLInt,
  List:    graphql.GraphQLList,
  NonNull: graphql.GraphQLNonNull,
  Object:  graphql.GraphQLObjectType,
  Schema:  graphql.GraphQLSchema,
  String:  graphql.GraphQLString,
}

module.exports = types
