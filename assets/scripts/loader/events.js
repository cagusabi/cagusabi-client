'use strict'
const pkg = 'loader.events'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const util = require('../util')

const onImageUpload = event => {
  event.preventDefault()
  util.logMessage(`${pkg}.onImageUpload()`)
  const formData = new FormData(event.target)
  util.logObject(formData)

  api.imageUpload(formData)
    .then(ui.onImageUploadSuccess)
    .catch(ui.onImageUploadFailure)
}

const onImageUpdate = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  util.logMessage(`${pkg}.onImageUpdate()`, 'Data ID: ' + id)

  const formData = getFormFields(event.target)
  util.logObject(formData)

  api.imageUpdate(id, formData)
    .then(ui.onImageUpdateSuccess)
    .catch(ui.onImageUpdateFailure)
}

const onImageRemove = event => {
  const id = $(event.target).data('id')
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
  $('.content').on('show.bs.modal', '#exampleModal-' + $(this).data('id'), function (event) {
    const button = $(event.relatedTarget) // Button that triggered the modal
    const recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    const modal = $(this)
    modal.find('.modal-body input').val(recipient)
  })
}

module.exports = {
  addHandlers
}
