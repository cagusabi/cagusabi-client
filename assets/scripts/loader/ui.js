'use strict'
const pkg = 'loader.ui'

const indexHandlebarTemplate = require('../templates/uploads-listing.handlebars')
const store = require('../store')
const util = require('../util')

const onImageUploadSuccess = apiResponse => {
  util.logMessage(`${pkg}.onImageUploadSuccess()`)
  $('.owner-' + apiResponse.upload._id).text('Owner username: ' + store.user.email)
  util.logObject(apiResponse)
  $('#image-display').html(`<img src=${apiResponse.upload.url} />`)
}

const onIndexSuccess = responseData => {
  util.logMessage(`${pkg}.onIndexSuccess()`)
  util.logObject(responseData)
  // util.logMessage(`${pkg}.onIndexSuccess()`, 'USER EMAIL ' + store.user.email)
  // const uploadsAndUser = responseData.upload
  const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: responseData.uploads })
  $('.content').html(indexUploadsHandlebars)
  $('.modal-backdrop').remove()
}

const onImageUpdateSuccess = () => {
  util.logMessage(`${pkg}.onImageUpdateSuccess()`, 'Image updated successfully!')
}

const onImageUpdateFailure = () => {
  util.logMessage(`${pkg}.onImageUpdateFailure()`, 'Image update failed!')
}

module.exports = {
  onImageUploadSuccess,
  onIndexSuccess,
  onImageUpdateSuccess,
  onImageUpdateFailure
}
