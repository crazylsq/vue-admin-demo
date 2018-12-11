
const TokenKey = 'token'

export function getToken () {
  const token = window.localStorage.getItem(TokenKey)
  return token
}

export function setToken (token) {
  return window.localStorage.setItem(TokenKey, token)
}

export function removeToken () {
  return window.localStorage.removeItem(TokenKey)
}
