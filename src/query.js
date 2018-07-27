module.exports = {
  CallExpression(path) {
    if (path.node.callee.name !== JSXQUERY_IDENTIFIER)
      return
    
    const queryArg = path.get('arguments')[0]
          
    if (queryArg.isThisExpression())
      console.info('Handle $(this)')
    else if (queryArg.isStringLiteral())
      console.info(`Handle complex queries: $('${queryArg.node.value}')`)
    else if (queryArg.isJSXElement())
      console.info(`Handle $(<${queryArg.node.openingElement.name.name} />)`)
  }
}