// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const limit = (date) => {
  const newDate = date.split('T')[0]
  return newDate
}

module.exports = limit
