'use strict'
const tape = require('tape')
const functionWithContext = require('./function-with-context')

let contextMock = { data: { name: null } }
const cbSpy = (t, expected) => (error, actual) => {
  t.equal(null, error, `Assert expected: null matches actual: ${error}`)
  t.deepEqual(
    expected,
    actual,
    `Assert expected: ${JSON.stringify(expected)} matches actual: ${JSON.stringify(actual)}`
  )
}

tape('Function with context test cases', (t) => {
  const names = ['Boris', 'Anonymous']

  for (let i = 0; i < names.length; i++) {
    let name = names[i] === 'Anonymous' ? null : names[i]
    contextMock.data.name = name
    functionWithContext(contextMock, cbSpy(t, { hello_you: names[i] }))
  }

  t.end()
})
