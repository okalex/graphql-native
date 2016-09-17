'use strict'

const graphql = require('graphql');

const ObjectHelper = require('../../util/ObjectHelper');
const data = require('../dev/data.json')

const UserType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString }
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
    return ObjectHelper.values(data);
  }
}

module.exports = {
  type: UserType,
  queries: {
    all: all,
    byId: byId
  }
};
