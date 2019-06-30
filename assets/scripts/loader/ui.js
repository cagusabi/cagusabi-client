'use strict'
const pkg = 'loader.ui'

const indexHandlebarTemplate = require('../templates/uploads-listing.handlebars')
// const store = require('../store')
const util = require('../util')

// const onImageUploadSuccess = apiResponse => {
//   util.logMessage(`${pkg}.onImageUploadSuccess()`)
//   $('.owner-' + apiResponse.upload._id).text('Owner username: ' + store.user.email)
//   util.logObject(apiResponse)
//   $('form').trigger('reset')
//   $('#image-display').html(`<img src=${apiResponse.upload.url} />`)
// }

const resetModalBackdrop = () => {
  // $('.modal-backdrop.modal-preview').remove()
  // $('.modal-backdrop.modal-upload').remove()
  $('.modal-backdrop').remove()
}

const onIndexSuccess = responseData => {
  util.logMessage(`${pkg}.onIndexSuccess()`)
  util.logObject(responseData)
  // NOTE: Upon a successful INDEX don't display a modal, just display the thumbnails!!

  // util.logMessage(`${pkg}.onIndexSuccess()`, 'USER EMAIL ' + store.user.email)
  // const uploadsAndUser = responseData.upload
  const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: responseData.uploads })
  $('.content').html(indexUploadsHandlebars)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onIndexFailure = responseData => {
  util.displayMessageModal(`${pkg}.onIndexFailure()`, 'onIndex', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUploadFailure = () => {
  util.displayMessageModal(`${pkg}.onImageUploadFailure()`, 'onImageUpload', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUpdateFailure = () => {
  util.displayMessageModal(`${pkg}.onImageUpdateFailure()`, 'onImageUpdate', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageRemoveFailure = () => {
  util.displayMessageModal(`${pkg}.onImageRemoveFailure()`, 'onImageRemove', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

module.exports = {
  resetModalBackdrop,
  onIndexSuccess,
  onIndexFailure,
  onImageUploadFailure,
  onImageUpdateFailure,
  onImageRemoveFailure
}
