import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import BlogPost from "./BlogPost/BlogPost"

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
  `)

  return (
    <Wrapper className="project-wrapper">
      <LinkWrapper>
        <CustomLink to="/blog/list">View All</CustomLink>
      </LinkWrapper>
      {allMarkdownRemark.edges.map((props, i) => {
        return <BlogPost key={i} {...props} />
      })}
      {allMarkdownRemark.edges.map((props, i) => {
        return <BlogPost key={i} {...props} />
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
  padding: 1.25rem 1rem 5rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 65vh;
    padding: 1.25rem 4rem 5rem;
  }
`

const LinkWrapper = styled.div`
  position: fixed;
  padding: 1.5rem 0 3rem;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.main1};

  @media (min-width: 768px) {
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark1};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: capitalize;
`

export default Blog
