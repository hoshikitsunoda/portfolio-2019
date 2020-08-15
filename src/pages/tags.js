import React from "react"
import { Link, graphql } from "gatsby"

import BlogSubpageLayout from "../hoc/Layout/blog-subpage-layout"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <BlogSubpageLayout page="tags">
    {group.map(tag => (
      <li key={tag.fieldValue}>
        <Link to={`/tags/${tag.fieldValue.toLowerCase()}/`}>
          #{tag.fieldValue.toUpperCase()} ({tag.totalCount})
        </Link>
      </li>
    ))}
  </BlogSubpageLayout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage
