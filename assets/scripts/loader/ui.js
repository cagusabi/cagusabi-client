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
  const uploadedImages = responseData.uploads
  const sortUploads = uploadedImages.sort(function (a) {
    if (a.editable === true) return -1
    if (a.editable === false) return 1
  })
  const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: sortUploads })
  $('.content').html(indexUploadsHandlebars)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onIndexFailure = responseData => {
  util.displayMessageModal(`${pkg}.onIndexFailure()`, 'onIndex', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUploadSuccess = () => {
  util.displayMessageModal(`${pkg}.onImageUploadSuccess()`, 'onImageUpload', true)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUploadFailure = () => {
  util.displayMessageModal(`${pkg}.onImageUploadFailure()`, 'onImageUpload', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUpdateSuccess = () => {
  util.displayMessageModal(`${pkg}.onImageUpdateSuccess()`, 'onImageUpdate', true)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageUpdateFailure = () => {
  util.displayMessageModal(`${pkg}.onImageUpdateFailure()`, 'onImageUpdate', false)
  $('form').trigger('reset')
  resetModalBackdrop()
}

const onImageRemoveSuccess = () => {
  util.displayMessageModal(`${pkg}.onImageRemoveSuccess()`, 'onImageRemove', true)
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
  onImageUploadSuccess,
  onImageUploadFailure,
  onImageUpdateSuccess,
  onImageUpdateFailure,
  onImageRemoveSuccess,
  onImageRemoveFailure
}
