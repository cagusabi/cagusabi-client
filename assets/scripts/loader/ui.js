'use strict'

const indexHandlebarTemplate = require('../templates/uploads-listing.handlebars')
const store = require('../store')

const onImageUploadSuccess = apiResponse => {
  $('.owner-' + apiResponse.upload._id).text('Owner username: ' + store.user.email)
  console.log(apiResponse)
  $('#image-display').html(`<img src=${apiResponse.upload.url} />`)
}

const onIndexSuccess = responseData => {
  console.log(responseData)
  // console.log("USER EMAIL" + store.user.email)
  // const uploadsAndUser = responseData.upload
  const indexUploadsHandlebars = indexHandlebarTemplate({ uploads: responseData.uploads })
  $('.content').html(indexUploadsHandlebars)
}

module.exports = {
  onImageUploadSuccess,
  onIndexSuccess
}
