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

module.exports = {
  logMessage
}
