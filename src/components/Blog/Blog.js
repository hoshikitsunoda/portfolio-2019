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
          <Panel key={node.frontmatter.slug}>
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
          </Panel>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  overflow: auto;
  height: 50vh;
  padding: 1.25rem 1rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 65vh;
    padding: 1.25rem 4rem;
  }
`

const Panel = styled.div`
  flex: 0 0 calc(33.333333% - 1rem);
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.main1};
  box-shadow: inset 17px 17px 25px ${({ theme }) => theme.colors.main2},
    inset -17px -17px 25px ${({ theme }) => theme.colors.main3};
`

export default Blog
