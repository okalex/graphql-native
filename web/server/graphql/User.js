'use strict'

const graphql = require('graphql')
const GraphQLDate = require('graphql-date')

const { users } = require('../models')

const UserType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate }
  }
});

const byId = {
  type: UserType,
  args: {
    id: { type: graphql.GraphQLString }
  },
  resolve: function (_, args) {
    return data[args.id];
  }
};

const all = {
  type: new graphql.GraphQLList(UserType),
  args: {},
  resolve: function(_) {
    return users.findAll()
  }
}

module.exports = {
  type: UserType,
  queries: {
    all: all,
    byId: byId
  }
};
