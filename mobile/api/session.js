import { AsyncStorage } from 'react-native'

const tokenKey = 'sessionToken'

const loadSessionToken = () => AsyncStorage.getItem(tokenKey)

const saveSessionToken = (token) => AsyncStorage.setItem(tokenKey, token)

module.exports = {
  loadSessionToken,
  saveSessionToken
}
