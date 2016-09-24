import { AsyncStorage } from 'react-native'

const tokenKey = 'sessionToken'

const loadSessionToken = () => AsyncStorage.getItem(tokenKey)

const saveSessionToken = (token) => AsyncStorage.setItem(tokenKey, token)

const deleteSessionToken = (token) => AsyncStorage.removeItem(tokenKey)

module.exports = {
  loadSessionToken,
  deleteSessionToken,
  saveSessionToken
}
