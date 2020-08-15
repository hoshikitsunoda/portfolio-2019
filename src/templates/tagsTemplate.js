import React from "react"
import { Link, graphql } from "gatsby"

import BlogSubpageLayout from "../hoc/Layout/blog-subpage-layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  const tagHeader = (
    <h3>
      {totalCount} post{totalCount === 1 ? "" : "s"} tagged with "
      <span>{tag.toLowerCase()}</span>"
    </h3>
  )

  return (
    <BlogSubpageLayout page="result" tagHeader={tagHeader}>
      {edges.map(({ node }) => {
        const { title, slug } = node.frontmatter
        return (
          <li key={slug}>
            <Link to={slug.toLowerCase()}>{title}</Link>
          </li>
        )
      })}
    </BlogSubpageLayout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
            tags
          }
        }
      }
    }
  }
`

export default Tags
