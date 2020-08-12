import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

const Blog = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Blog {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blog)/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper className="project-wrapper">
      {allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div key={node.frontmatter.slug}>
            <div>
              <time dateTime={node.frontmatter.date}>
                {node.frontmatter.date}
              </time>
            </div>
            <h2>
              <a href={node.frontmatter.slug}>{node.frontmatter.title}</a>
            </h2>
            <p>{node.excerpt}</p>
            <a href={node.frontmatter.slug}>Read more...</a>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  overflow: auto;
  height: 50vh;
  padding: 1.25rem 1rem;

  @media (min-width: 768px) {
    height: 65vh;
    padding: 1.25rem 4rem;
  }
`

export default Blog
