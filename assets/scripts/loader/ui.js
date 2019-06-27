'use strict'

const indexHandlebarTemplate = require('../templates/uploads-listing.handlebars')

const onImageUploadSuccess = apiResponse => {
  $('#image-display').html(`<img src=${apiResponse.upload.url} />`)
}

const onIndexSuccess = responseData => {
  console.log(responseData.uploads)
  const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: responseData.uploads })
  $('.content').html(indexUploadsHandlebars)
}

module.exports = {
  onImageUploadSuccess,
  onIndexSuccess
}
