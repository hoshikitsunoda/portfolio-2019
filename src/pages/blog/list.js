import React from "react"
import { graphql } from "gatsby"

import BlogSubpageLayout from "../../hoc/Layout/blog-subpage-layout"
import BlogPost from "../../components/Blog/BlogPost/BlogPost"

const BlogListPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <BlogSubpageLayout page="posts">
      {edges.map((props, i) => {
        return <BlogPost key={i} {...props} />
      })}
    </BlogSubpageLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

export default BlogListPage
