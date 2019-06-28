// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const splitEmail = (email) => {
  const newEmail = email.split('@')[0]
  return newEmail
}

module.exports = splitEmail
