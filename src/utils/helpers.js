exports.flatten = data => data.edges.map(({ node }) => node)

exports.codeAnchor = ({ identifierPrefix = '', code = '', status }) =>
  `${identifierPrefix}${code}_${status.replace(/\./g, '_')}`
