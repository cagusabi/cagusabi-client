'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const loaderEvents = require('./loader/events.js')

$(() => {
  loaderEvents.addHandlers()
})
// $(() => {
//   $('#image-uploader').on('submit', function (event) {
//     event.preventDefault()
//
//     const formData = new FormData(event.target)
//     // FormData is a browser class which allows us to work with multipart/
//     // form-data request
//
//     $.ajax({
//       method: 'POST',
//       url: config.apiUrl + '/uploads',
//       contentType: false, // you use this because StackOverFlow. but basically you just don't want jQuery to interfere, because we've already set the content type
//       processData: false, // same here
//       data: formData // then we can just send it as is because it's already formatted
//     })
//       .then(apiResponse => {
//         $('#image-display').html(`<img src=${apiResponse.upload.url} />`)
//       })
//       .catch(console.log)
//   })
// })
