import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import BlogPost from "./BlogPost/BlogPost"
import Button from "../UI/Button"

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
  `)

  return (
    <Wrapper className="project-wrapper">
      {allMarkdownRemark.edges.map((props, i) => {
        return <BlogPost key={i} {...props} />
      })}
      <LinkWrapper>
        <Button blogList>
          <Link to="/blog/list">View All</Link>
        </Button>
      </LinkWrapper>
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
  padding: 1.5rem 0 2rem;
  width: 100%;
  left: 0;
  bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default Blog
