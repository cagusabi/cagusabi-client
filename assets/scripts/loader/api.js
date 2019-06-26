'use strict'
const config = require('../config')

const imageUpload = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/uploads',
    contentType: false, // you use this because StackOverFlow. but basically you just don't want jQuery to interfere, because we've already set the content type
    processData: false, // same here
    data: formData // then we can just send it as is because it's already formatted
  })
}

module.exports = {
  imageUpload
}
