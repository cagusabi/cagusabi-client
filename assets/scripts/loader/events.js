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
  const id = $(event.target).data('id')

  console.log('event' + event.target)
  const formData = getFormFields(event.target)

  api.imageUpdate(id, formData)
    .then(console.log)
    .catch(ui.onImageUploadFailure)
}

const onImageRemove = event => {
  const id = $(event.target).data('id')
  console.log(id)
  event.preventDefault()

  api.imageRemove(id)
    .then(ui.onRemoveSuccess)
    .catch(ui.onRemoveFailure)
}

const addHandlers = () => {
  $('#image-update').on('submit', onImageUpdate)
  $('#image-uploader').on('submit', onImageUpload)
  $('.content').on('click', '.remove-upload', onImageRemove)
  $('.content').submit('#image-update' + $(this).data('id'), onImageUpdate)
}

module.exports = {
  addHandlers
}
