'use strict'
const api = require('./api')

const onImageLoad = (event) => {
  event.preventDefault()
  api.imageLoad()
  // .then
  // })
}






const addHandlers = () => {
  $('#image-uploader').on('submit', onImageLoad)
}

module.exports = {
  addHandlers
}
