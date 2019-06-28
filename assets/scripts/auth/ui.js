'use strict'
const pkg = 'auth.ui'

const store = require('../store')
const util = require('../util')
const loaderApi = require('../loader/api.js')
const loaderUi = require('../loader/ui.js')

const onSignUpSuccess = () => {
  util.logMessage(`${pkg}.onSignUpSuccess()`, 'Signed up successfully!')
}

const onSignUpFailure = () => {
  util.logMessage(`${pkg}.onSignUpFailure()`, 'Sign up failed!')
}

const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  util.logMessage(`${pkg}.onSignInSuccess()`, 'Signed in successfully!')
  loaderApi.imageIndex()
    .then(loaderUi.onIndexSuccess)
    .catch(loaderUi.failure)
  // const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: store.uploads })
  // $('.content').html(indexUploadsHandlebars)
}

const onSignInFailure = () => {
  util.logMessage(`${pkg}.onSignInFailure()`, 'Sign in failed!')
}

const onSignOutSuccess = () => {
  util.logMessage(`${pkg}.onSignOutSuccess()`, 'Signed out successfully!')
}

const onSignOutFailure = () => {
  util.logMessage(`${pkg}.onSignOutFailure()`, 'Sign out failed!')
}

const onChangePasswordSuccess = () => {
  util.logMessage(`${pkg}.onChangePasswordSuccess()`, 'Changed password successfully!')
}

const onChangePasswordFailure = () => {
  util.logMessage(`${pkg}.onChangePasswordFailure()`, 'Change password failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
