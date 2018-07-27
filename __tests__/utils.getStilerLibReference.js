const { transform } = require('babel-core')
const { getStilerLibReference } = require('../src/utils/')

/**
 * Gets file's reference to the stiler lib
 * 
 * Supports:
 *  - ImportDeclaration & VariableDeclaration
 *  - Both with/without destructuring
 * 
 * @param {string} code
 */

it('should equal to Stiler', () => {
  expect(getStilerLibReference("import Stiler from 'stiler'")).toBe('Stiler')
})

it('should equal to query', () => {
  expect(getStilerLibReference("const Stiler = require('stiler')")).toBe('Stiler')
})
