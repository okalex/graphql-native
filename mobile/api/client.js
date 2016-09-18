import ApolloClient, { createNetworkInterface } from 'apollo-client'

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:3000/api'),
})

module.exports = {
  client
}
