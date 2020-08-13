import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../hoc/Layout/layout"
import SEO from "../components/seo"

import styled from "styled-components"

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
    <Layout>
      <SEO title={`${tag.toLowerCase()}`} />
      <TagsWrapper>
        <Container>
          <Heading>Result</Heading>
          <TextWrapper>{tagHeader}</TextWrapper>
          <ListWrapper>
            {edges.map(({ node }) => {
              const { title, slug } = node.frontmatter
              return (
                <li key={slug}>
                  <Link to={slug.toLowerCase()}>{title}</Link>
                </li>
              )
            })}
          </ListWrapper>
          <AllTags to="/tags">All tags</AllTags>
        </Container>
      </TagsWrapper>
    </Layout>
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

const TagsWrapper = styled.div`
  padding: 3.5rem 1rem 5rem;
  box-shadow: 0px 30px 50px 0px rgba(1, 1, 1, 0.15);
  max-width: 1000px;
  margin: 2rem auto;
`

const Container = styled.div`
  max-width: 840px;
  margin: 0 auto;
`

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 2rem;
  line-height: 2.8rem;
`

const TextWrapper = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    margin: 0;
  }

  span {
    color: ${({ theme }) => theme.colors.textAccent};
    font-family: ${({ theme }) => theme.fonts.bold};
    padding: 0.25rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 2.5rem 0;

  li {
    margin: 1rem 0 1rem 0.25rem;

    &:before {
      content: "-";
    }

    a {
      font-family: ${({ theme }) => theme.fonts.main};
      font-size: 1.4rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.dark1};
      transition: 0.2s ease-in;
      margin-left: 0.5rem;

      &:hover {
        color: ${({ theme }) => theme.colors.textAccent};
      }
    }
  }
`

const AllTags = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark1};
  transition: 0.2s ease-in;
  margin-left: 0.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

export default Tags
