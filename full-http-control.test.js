'use strict'
const tape = require('tape')
const fullHttpControl = require('./full-http-control')
const contextMock = {}
const reqMock = {}

const responseMock = (t, expected) => {
  return {
    writeHead: (statusCode, contentType) => {
      t.equal(
        expected.statusCode,
        statusCode,
        `Assert expected: ${expected.statusCode} matches actual: ${statusCode}`
      )

      t.deepEquals(
        expected.contentType,
        contentType,
        `Assert expected: ${JSON.stringify(expected.contentType)} matches actual: ${JSON.stringify(contentType)}`
      )
    },
    end: (response) => {
      t.equal(
        expected.response,
        response,
        `Assert expected: ${expected.response} matches actual: ${response}`
      )
    }
  }
}

tape('Full http control test cases', (t) => {
  const expected = {
    statusCode: 200,
    contentType: { 'Content-Type': 'text/html ' },
    response: '<h1>Hello, world!</h1>'
  }
  fullHttpControl(contextMock, reqMock, responseMock(t, expected))
  t.end()
})
