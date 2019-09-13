const path = require('path');

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) =>{
    const drinkPostTemplate = path.resolve ('src/templates/drink-post.js')
    resolve(
      graphql(`
      {
      allContentfulDrink (limit: 100){
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      `).then((result) => {
        if(result.errors){
          reject(result.errors)
        }
        result.data.allContentfulDrink.edges.forEach((edge) =>{
          createPage({
            path: edge.node.slug,
            component: drinkPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}
