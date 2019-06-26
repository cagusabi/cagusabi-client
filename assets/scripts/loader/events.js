'use strict'
const api = require('./api')
const ui = require('./ui')

const onImageUpload = event => {
  event.preventDefault()
  const formData = new FormData(event.target)

  api.imageUpload(formData)
    .then(ui.onImageUploadSuccess)
    .catch(ui.onImageUploadFailure)
}

const addHandlers = () => {
  $('#image-uploader').on('submit', onImageUpload)
}

module.exports = {
  addHandlers
}
