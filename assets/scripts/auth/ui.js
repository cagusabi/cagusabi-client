'use strict'

const store = require('../store')
const util = require('../util')

const onSignUpSuccess = () => {
  util.logMessage('', 'Signed up successfully!')
}

const onSignUpFailure = () => {
  util.logMessage('', 'Sign up failed!')
}

const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  util.logMessage('', 'Signed in successfully!')
}

const onSignInFailure = () => {
  util.logMessage('', 'Sign up failed!')
}

const onSignOutSuccess = () => {
  util.logMessage('', 'Signed out successfully!')
}

const onSignOutFailure = () => {
  util.logMessage('', 'Sign out failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
