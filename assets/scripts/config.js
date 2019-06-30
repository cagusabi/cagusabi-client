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
    success: 'Goodbye! Hope to see you again soon!',
    failure: 'Oops... Sign out failed. Weird. Please try again.'
  },
  onIndex: {
    title: 'Photo Retrieval',
    success: 'Photo retrieval successful.', // We should never use this
    failure: 'Whoa... We couldn\'t retrieve photos. Please sign out and sign in again!'
  },
  onImageUpload: {
    title: 'Image Upload',
    success: 'Image uploaded successfully!', // We should never use this
    failure: 'Image could not be uploaded. Please try again!'
  },
  onImageUpdate: {
    title: 'Image Update',
    success: 'Image updated successfully!',
    failure: 'Image could not be updated. Please try again!'
  },
  onImageRemove: {
    title: 'Image Remove',
    success: 'Image removed successfully!',
    failure: 'Image could not be removed. Please try again!'
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
