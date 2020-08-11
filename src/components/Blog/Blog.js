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
      {allMarkdownRemark.edges.map(item => {
        return (
          <div key={item.node.frontmatter.slug}>
            <div>
              <time dateTime={item.node.frontmatter.date}>
                {item.node.frontmatter.date}
              </time>
            </div>
            <h2>
              <a href={item.node.frontmatter.slug}>
                {item.node.frontmatter.title}
              </a>
            </h2>
            <p>{item.node.excerpt}</p>
            <a href={item.node.frontmatter.slug}>Read more...</a>
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
