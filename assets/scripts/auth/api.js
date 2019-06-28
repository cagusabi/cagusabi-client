'use strict'
const pkg = 'auth.api'

const config = require('../config')
const store = require('../store')
const util = require('../util')

/*
** signUp()
*/
const signUp = (formData) => {
  util.logMessage(`${pkg}.signUp()`)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

/*
** signIn()
*/
const signIn = (formData) => {
  util.logMessage(`${pkg}.signIn()`)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

/*
** signOut()
*/
const signOut = (event) => {
  util.logMessage(`${pkg}.signOut()`)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

/*
** changePassword()
*/
const changePassword = (formData) => {
  util.logMessage(`${pkg}.changePassword()`)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
