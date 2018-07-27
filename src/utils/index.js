module.exports = {
  /**
   * Gets file's reference to the stiler lib
   * 
   * Supports:
   *  - ImportDeclaration & VariableDeclaration
   *  - Both with/without destructuring
   * 
   * @param {string} code
   */
  getStilerLibReference: code => {
    let match = code
      ? code.match(/import\s+[\{\s*]?(\s*[$|\w]+\s*)[\s*\}]?\s+from\s+['|"]stiler['|"]/)
        ||
        code.match(/[const|let|var]\s+[\{\s*]?(\s*[$|\w]+\s*)[\s*\}]?\s+=\s+require\(\s*['|"]stiler['|"]\s*\)/)
      : null

    return match && match[1].trim() || null
  }
}