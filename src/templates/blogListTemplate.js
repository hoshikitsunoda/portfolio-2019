import React from "react"
import { graphql, Link } from "gatsby"

import BlogSubpageLayout from "../hoc/Layout/blog-subpage-layout"
import BlogPost from "../components/Blog/BlogPost/BlogPost"

import styled from "styled-components"

const BlogListPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext,
}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/blog/list/${
    currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  }`
  const nextPage = `/blog/list/${(currentPage + 1).toString()}`

  return (
    <BlogSubpageLayout page="posts">
      {edges.map((props, i) => {
        return <BlogPost key={i} {...props} />
      })}
      <Flex>
        {!isFirst && (
          <CustomLink to={prevPage} rel="prev">
            ← Previous Page
          </CustomLink>
        )}
        {!isLast && (
          <CustomLink to={nextPage} rel="next">
            Next Page →
          </CustomLink>
        )}
      </Flex>
    </BlogSubpageLayout>
  )
}

export const pageQuery = graphql`
  query Archive($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CustomLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.bold};
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark1};
  transition: 0.2s ease-out;
  margin: 0 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

export default BlogListPage
