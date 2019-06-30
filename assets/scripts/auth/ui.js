'use strict'
const pkg = 'auth.ui'

const config = require('../config')
const store = require('../store')
const util = require('../util')
const loaderApi = require('../loader/api.js')
const loaderUi = require('../loader/ui.js')

const onSignUpSuccess = () => {
  util.logMessage(`${pkg}.onSignUpSuccess()`, 'Signed up successfully!')
  $(config.userMessageModalTitle).text(config.userMessages.onSignUp.title)
  $(config.userMessageModalBody).text(config.userMessages.onSignUp.success)
  $(config.userMessageModalID).modal('show')
  $('form').trigger('reset')
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
  $(config.userMessageModalTitle).text(config.userMessages.onSignIn.title)
  $(config.userMessageModalBody).text(config.userMessages.onSignIn.success)
  $(config.userMessageModalID).modal('show')
  $('#sign-in').hide()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#change-password-btn').show()
  $('#uploadButton').show()
  $('#sign-out-btn').show()
  $('#image-uploader').show()
  $('form').trigger('reset')
  loaderApi.imageIndex()
    .then(loaderUi.onIndexSuccess)
    .catch(loaderUi.failure)
  // const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: store.uploads })
  // $('.content').html(indexUploadsHandlebars)
}

const onSignInFailure = () => {
  util.logMessage(`${pkg}.onSignInFailure()`, 'Sign in failed!')
  $('#auth-message').html('Failed to sign in')
  $('#auth-message').fadeIn('slow')
  $('form').trigger('reset')
  setTimeout(() => $('#auth-message').fadeOut('slow'), 3000)
}

const onSignOutSuccess = () => {
  store.user = {}
  util.logMessage(`${pkg}.onSignOutSuccess()`, 'Signed out successfully!')
  $('#auth-message').html('Signed out successfully!')
  $('#auth-message').fadeIn('slow')
  setTimeout(() => $('#auth-message').fadeOut('slow'), 3000)
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('#change-password-btn').hide()
  $('#sign-out-btn').hide()
  $('#image-uploader').hide()
  $('#uploadButton').hide()
  $('.content').empty()
  $('.welcome-message').show()
}

const onSignOutFailure = () => {
  util.logMessage(`${pkg}.onSignOutFailure()`, 'Sign out failed!')
}

const onChangePasswordSuccess = () => {
  util.logMessage(`${pkg}.onChangePasswordSuccess()`, 'Changed password successfully!')
  document.getElementById('changePasswordModalTitle').style.display = 'none'
  $('#changePasswordModalTitle').fadeIn('fast')
  $('#changePasswordModalTitle').html('Password changed successfully!')
  setTimeout(() => $('#changePasswordModalTitle').text('Change Again?'), 3000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  util.logMessage(`${pkg}.onChangePasswordFailure()`, 'Change password failed!')
  document.getElementById('changePasswordModalTitle').style.display = 'none'
  $('#changePasswordModalTitle').fadeIn('fast')
  $('#changePasswordModalTitle').html('Change password failed!')
  setTimeout(() => $('#changePasswordModalTitle').text('Try Again?'), 3000)
  $('form').trigger('reset')
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
