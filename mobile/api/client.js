import ApolloClient, { createNetworkInterface } from 'apollo-client'
import gql from 'graphql-tag'

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:3000/api'),
})

const allUsers = gql`query allUsers {
  users {
    id
    name
  }
}`

module.exports = {
  client,
  allUsers
}
