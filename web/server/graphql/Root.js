'use strict'

const gql = require('./types')
const User = require('./User')

const Query = new gql.Object({
  name: 'Query',
  fields: {
    user: User.queries.one,
    users: User.queries.all
  }
});

const Mutation = new gql.Object({
  name: 'Mutation',
  fields: {
    addUser: User.mutations.add
  }
})

module.exports = {
  Query,
  Mutation
};
