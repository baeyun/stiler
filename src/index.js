const { getStilerLibReference } = require('./utils/')
// const query = require('./query')

module.exports = ({types: t}) => {
  return {
    name: 'stiler',
    inherits: require('babel-plugin-syntax-jsx'),
    // pre(state) {}, // use later
    visitor: {
      Program(path, {file: {code}}) {
        // Get file's reference to the stiler lib
        const STILER_REF = getStilerLibReference(code)
        
        // Bail if file doesn't import/require 'stiler'
        if (!STILER_REF)
          path.stop()
        
        // Let's begin
        path.traverse(query)
      }
    },
    // post(state) {}, // use later
  }
}