'use strict'

const onImageUploadSuccess = apiResponse => {
  $('#image-display').html(`<img src=${apiResponse.upload.url} />`)
}

module.exports = {
  onImageUploadSuccess
}
