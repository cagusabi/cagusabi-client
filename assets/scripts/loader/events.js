'use strict'
const pkg = 'loader.events'

const api = require('./api')
const ui = require('./ui')
const util = require('../util')
const getFormFields = require('../../../lib/get-form-fields')

/*
** This is the main images index call - this is called by multiple other methods.
*/
const onImagesLoad = event => {
  event.preventDefault()
  util.logMessage(`${pkg}.onImagesLoad()`)

  api.imageIndex()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

/*
** Upload a given image
*/
const onImageUpload = event => {
  event.preventDefault()
  util.logMessage(`${pkg}.onImageUpload()`)

  const formData = new FormData(event.target)
  util.logObject(formData)

  api.imageUpload(formData)
    .then(res => {
      // Call onImagesLoad() if successful.
      $('.uploadMsg').text('Upload Succesful!')
      onImagesLoad(event)
    })
    .then(ui.onImageUploadSuccess)
    .catch(ui.onImageUploadFailure)
}

/*
** Update a fiven image
*/
const onImageUpdate = event => {
  event.preventDefault()
  util.logMessage(`${pkg}.onImageUpdate()`)

  const id = $(event.target).data('id')
  util.logMessage(`${pkg}.onImageUpdate()`, `ID = ${id}`)
  ui.resetModalBackdrop()

  const formData = getFormFields(event.target)
  util.logObject(formData)

  api.imageUpdate(id, formData)
    .then(() => {
      // Call onImagesLoad() if successful.
      onImagesLoad(event)
    })
    .then(ui.resetModalBackdrop)
    .then(ui.onImageUpdateSuccess)
    .catch(ui.onImageUpdateFailure)
}

/*
** Remove an image
*/
const onImageRemove = event => {
  event.preventDefault()
  util.logMessage(`${pkg}.onImageUpdate()`)

  const id = $(event.target).data('id')
  util.logMessage(`${pkg}.onImageRemove()`, `ID = ${id}`)

  api.imageRemove(id)
    .then(res => {
      // Call onImagesLoad() if successful.
      onImagesLoad(event)
    })
    .then(ui.onImageRemoveSuccess)
    .catch(ui.onImageRemoveFailure)
}

const uploadMsgReset = () => {
  $('.uploadMsg').text('Upload a Photo')
}

const addHandlers = () => {
  $('#uploadButton').on('click', uploadMsgReset)
  $('#image-update').on('submit', onImageUpdate)
  $('#image-uploader').on('submit', onImageUpload)
  $('.content').on('click', '.remove-upload', onImageRemove)
  $('.content').submit('#image-update-' + $(this).data('id'), onImageUpdate)
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
