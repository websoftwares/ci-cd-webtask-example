'use strict'
const tape = require('tape')
const simpleFunction = require('./simple-function')
const cbSpy = (t, expected) => (error, actual) => {
  t.equal(null, error, `Assert expected: null matches actual: ${error}`)
  t.deepEqual(
    expected,
    actual,
    `Assert expected: ${JSON.stringify(expected)} matches actual: ${JSON.stringify(actual)}`
  )
}

tape('Simple function test cases', (t) => {
  const exptected = { i_am: 'done ' }
  simpleFunction(cbSpy(t, exptected))
  t.end()
})
