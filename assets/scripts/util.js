'use strict'

const config = require('./config')

/*
** logMessage() - logs a message to the console ONLY in development.
**    params: method name
**            message(s) to be logged
**    returns: nothing
*/
const logMessage = function () {
  const args = Array.from(arguments)
  if (config.isNotProd) {
    const method = args.shift()
    console.log(`IN: ${method}:`, args.join(' '))
  }
}

/*
** logObject() - dumps an object to the console ONLY in development.
**    params: method name
**            message to be logged
**    returns: nothing
*/
const logObject = function (obj) {
  if (config.isNotProd) {
    console.log(obj)
  }
}

/*
** displayMessageModal() - set user message values and display modal
**    params: method name
**            User message object
**            success/fail flag
**    returns: nothing
*/
const displayMessageModal = (method, method2, successFlag) => {
  console.log(method2, successFlag)
  const messageObj = config.userMessages[method2]
  let title, message

  if (!messageObj) {
    title = '***** ERROR!! *****'
    message = '***** OBJECT UNDEFINED!! *****'
  } else {
    title = messageObj.title
    if (successFlag) {
      message = messageObj.success
    } else {
      message = messageObj.failure
    }
  }

  logMessage(method, message)
  $('.modal-backdrop').add()
  $(config.userMessageModalTitle).text(title)
  $(config.userMessageModalBody).text(message)
  $(config.userMessageModalID).modal('show')
}

module.exports = {
  logMessage,
  logObject,
  displayMessageModal
}
