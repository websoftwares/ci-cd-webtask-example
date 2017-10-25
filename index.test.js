"use strict"
const tape = require('tape')
const index = require('./index')

let contextMock = { data: { name: null } }
const cbSpy = (t, expected) => (error, actual) => {
  t.deepEqual(expected, actual, `Assert expected: ${JSON.stringify(expected)} matches actual: ${JSON.stringify(actual)}`)
}

tape('Assert expected response matches actual response', ((t) => {
  const names = ['Boris', 'Anonymous']

  for (let i = 0; i < names.length; i++) {
    let name = names[i] === 'Anonymous' ? null : names[i]
    contextMock.data.name = name
    index(contextMock, cbSpy(t, { hello_you: names[i] }))
  }

  t.end()
}))
