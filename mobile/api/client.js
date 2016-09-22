import ApolloClient, { createNetworkInterface } from 'apollo-client'

const host = 'http://localhost:3000'

const client = new ApolloClient({
  networkInterface: createNetworkInterface(host + '/api'),
})

const makeRequest = (path, method = 'GET', headers = null, data = null) => {
  let options = {
    method: method
  }
  if (headers) options.headers = headers
  if (data) options.body = JSON.stringify(data)
  return fetch(host + path, options)
}

const makeRequestWithAuthToken = (path, token, method = 'GET', data = null) => {
  let headers = {
    'Authorization': 'TOKEN ' + token
  }
  return makeRequest(path, method, headers, data)
}

const get = (path) => makeRequest(path, 'GET')

const getWithAuthToken = (path, token) => makeRequestWithAuthToken(path, token, 'GET')

const post = (path, data) => makeRequest(path, 'POST', null, data)

const postWithAuthToken = (path, token, data) => makeRequestWithAuthToken(path, token, 'POST', data)

const isOk = (response) => (response.status == 200)

const checkLogin = (token) => getWithAuthToken('/home', token).then(isOk)

const submitLogin = (username, password) => {
  return post('/login', {
    username: username,
    password: password
  })
}

module.exports = {
  client,
  checkLogin,
  submitLogin
}
