'use strict'
const pkg = 'auth.ui'

const store = require('../store')
const util = require('../util')
const loaderApi = require('../loader/api')
const loaderUI = require('../loader/ui')

const onSignUpSuccess = () => {
  util.displayMessageModal(`${pkg}.onSignUpSuccess()`, 'onSignUp', true)
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  util.displayMessageModal(`${pkg}.onSignUpFailure()`, 'onSignUp', false)
  $('form').trigger('reset')
}

const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  util.displayMessageModal(`${pkg}.onSignInSuccess()`, 'onSignIn', true)
  $('#sign-in').hide()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#change-password-btn').show()
  $('#uploadButton').show()
  $('#sign-out-btn').show()
  $('#image-uploader').show()
  $('form').trigger('reset')
  loaderApi.imageIndex()
    .then(loaderUI.onIndexSuccess)
    .catch(loaderUI.failure)
  // const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: store.uploads })
  // $('.content').html(indexUploadsHandlebars)
}

const onSignInFailure = () => {
  util.displayMessageModal(`${pkg}.onSignInFailure()`, 'onSignIn', false)
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  store.user = {}
  util.displayMessageModal(`${pkg}.onSignOutSuccess()`, 'onSignOut', true)
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
  util.displayMessageModal(`${pkg}.onSignOutFailure()`, 'onSignOut', false)
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
