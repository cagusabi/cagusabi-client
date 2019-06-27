'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onImageUpload = event => {
  event.preventDefault()
  const formData = new FormData(event.target)

  api.imageUpload(formData)
    .then(ui.onImageUploadSuccess)
    .catch(ui.onImageUploadFailure)
}

const onImageUpdate = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.imageUpdate(formData)
    .then(console.log)
    .catch(ui.onImageUploadFailure)
}

const addHandlers = () => {
  $('#image-update').on('submit', onImageUpdate)
  $('#image-uploader').on('submit', onImageUpload)
}

module.exports = {
  addHandlers
}
