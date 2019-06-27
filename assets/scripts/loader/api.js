'use strict'
const config = require('../config')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields')
const imageUpload = formData => {
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

const imageUpdate = function (formData) {
  console.log(formData)
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    url: config.apiUrl + '/uploads/' + formData.id,
    contentType: false, // you use this because StackOverFlow. but basically you just don't want jQuery to interfere, because we've already set the content type
    processData: false, // same here
    data: formData // then we can just send it as is because it's already formatted
  })
}

module.exports = {
  imageUpload,
  imageUpdate
}
