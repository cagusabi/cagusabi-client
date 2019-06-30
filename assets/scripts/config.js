'use strict'

const userMessageModalID = '#user-message-modal'
const userMessageModalTitle = '#user-message-modal-title'
const userMessageModalBody = '#user-message-modal-body'

const userMessages = {
  onSignUp: {
    title: 'Sign Up',
    success: 'Signed up successfully!',
    failure: 'Sign up failed! (Did you sign up already?)'
  },
  onSignIn: {
    title: 'Sign In',
    success: 'Welcome! View or submit your photos below!',
    failure: 'Sign in failed! Please try again.'
  },
  onSignOut: {
    title: 'Sign Out',
    success: 'Goodbye! Hope to see you soon!',
    failure: 'Oops... Sign out failed. Weird. Please try again.'
  }
}

let apiUrl
const apiUrls = {
  production: 'https://agile-wave-91156.herokuapp.com',
  development: 'http://localhost:4741'
}

let isNotProd
const prodFlag = {
  production: false,
  development: true
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
  isNotProd = prodFlag.development
} else {
  apiUrl = apiUrls.production
  isNotProd = prodFlag.production
}

module.exports = {
  userMessageModalID,
  userMessageModalTitle,
  userMessageModalBody,
  userMessages,
  apiUrl,
  isNotProd
}
