'use strict'

const gql = require('./types')
const { users } = require('../models')
const passwordUtils = require('../util/password-utils')

const UserType = new gql.Object({
  name: 'User',
  description: 'A user',
  fields: {
    id:        { type: gql.Int },
    name:      { type: gql.String },
    email:     { type: gql.String },
    createdAt: { type: gql.Date },
    updatedAt: { type: gql.Date }
  }
});

const one = {
  type: UserType,
  args: {
    id:    { type: gql.String },
    email: { type: gql.String }
  },
  resolve: (root, args) => users.findOne({ where: args })
};

const all = {
  type: new gql.List(UserType),
  args: {},
  resolve: (root) => users.findAll()
};

const add = {
  type: UserType,
  args: {
    name:     { type: new gql.NonNull(gql.String) },
    email:    { type: new gql.NonNull(gql.String) },
    password: { type: new gql.NonNull(gql.String) }
  },
  resolve: (root, args) => {
    return users.findByEmail(args.email)
      .then( existing => {
        if (existing) throw new Error(`Email ${args.email} already exists`)
      })
      .then( _ => passwordUtils.hash(args.password) )
      .then( pwHash => users.create({
        name:         args.name,
        email:        args.email.toLowerCase(),
        passwordHash: pwHash
      }))
      .catch( err => {
        console.error(err)
        return null
      })
  }
};

module.exports = {
  type: UserType,
  queries: {
    all,
    one
  },
  mutations: {
    add
  }
};
