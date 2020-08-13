const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const tagsTemplate = path.resolve("src/templates/tagsTemplate.js")

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
