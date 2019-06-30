'use strict'
const pkg = 'loader.api'

const config = require('../config')
const store = require('../store')
const util = require('../util')
// const getFormFields = require('../../../lib/get-form-fields')

const imageUpload = formData => {
  util.logMessage(`${pkg}.imageUpload()`)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/uploads',
    contentType: false, // you use this because StackOverFlow. but basically you just don't want jQuery to interfere, because we've already set the content type
    processData: false, // same here
    data: formData, // then we can just send it as is because it's already formatted
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const imageUpdate = function (id, formData) {
  util.logMessage(`${pkg}.imageUpdate()`)
  util.logMessage(`${pkg}.imageUpdate()`, `ID = ${id}`)
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    url: config.apiUrl + '/uploads/' + id,
    data: formData // then we can just send it as is because it's already formatted

    // you use this because StackOverFlow. but basically you just don't want jQuery to interfere, because we've already set the content type
    // processData: false, // same here
  })
}

const imageIndex = function () {
  util.logMessage(`${pkg}.imageIndex()`)
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET',
    url: config.apiUrl + '/uploads'
  })
}

const imageRemove = function (id) {
  util.logMessage(`${pkg}.imageRemove()`)
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE',
    url: config.apiUrl + '/uploads/' + id
  })
}

module.exports = {
  imageUpload,
  imageUpdate,
  imageIndex,
  imageRemove
}
