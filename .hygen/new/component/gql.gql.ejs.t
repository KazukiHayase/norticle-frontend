---
to: "<%= haveGraphQL ? `${path}/index.gql` : null %>"
---
fragment <%= componentName %> on <%= feature %> {}
