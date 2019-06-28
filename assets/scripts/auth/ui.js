'use strict'
const pkg = 'auth.ui'

const store = require('../store')
const util = require('../util')
const loaderApi = require('../loader/api.js')
const loaderUi = require('../loader/ui.js')

const onSignUpSuccess = () => {
  util.logMessage(`${pkg}.onSignUpSuccess()`, 'Signed up successfully!')
  $('#user-message-modal-title').text('Sign Up')
  $('#user-message-modal-body').text('Signed up successfully!')
  $('#user-message-modal').modal('show')
}

const onSignUpFailure = () => {
  util.logMessage(`${pkg}.onSignUpFailure()`, 'Sign up failed!')
  $('#auth-message').html('Failed to sign up')
  $('#auth-message').fadeIn('slow')
  $('form').trigger('reset')
  setTimeout(() => $('#auth-message').fadeOut('slow'), 3000)
}

const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  util.logMessage(`${pkg}.onSignInSuccess()`, 'Signed in successfully!')

  $('#user-message-modal-title').text('Sign In')
  $('#user-message-modal-body').text('Signed in successfully!')
  $('#user-message-modal').modal('show')
  $('#sign-in').hide()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#change-password-btn').show()
  $('#sign-out-btn').show()
  $('#image-uploader').show()
  loaderApi.imageIndex()
    .then(loaderUi.onIndexSuccess)
    .catch(loaderUi.failure)
  // const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: store.uploads })
  // $('.content').html(indexUploadsHandlebars)
}

const onSignInFailure = () => {
  util.logMessage(`${pkg}.onSignInFailure()`, 'Sign in failed!')
  $('#auth-message').html('Failed to sign up')
  $('#auth-message').fadeIn('slow')
  $('form').trigger('reset')
  setTimeout(() => $('#auth-message').fadeOut('slow'), 3000)
}

const onSignOutSuccess = () => {
  util.logMessage(`${pkg}.onSignOutSuccess()`, 'Signed out successfully!')
  $('#auth-message').html('Signed out successfully!')
  $('#auth-message').fadeIn('slow')
  setTimeout(() => $('#auth-message').fadeOut('slow'), 3000)
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('#change-password-btn').hide()
  $('#sign-out-btn').hide()
  $('#image-uploader').hide()
  $('.content').empty()
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
