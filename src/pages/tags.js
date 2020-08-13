import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../hoc/Layout/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <TagsWrapper>
      <Container>
        <SEO title={`Tags`} />
        <div>
          <Heading>Tags</Heading>
          <ListWrapper>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${tag.fieldValue.toLowerCase()}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ListWrapper>
        </div>
      </Container>
    </TagsWrapper>
  </Layout>
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

const Heading = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 2rem;
  line-height: 2.8rem;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 3.5rem 0;

  li {
    margin: 2rem 0 2rem 0.25rem;

    &:before {
      content: "-";
    }

    a {
      font-family: ${({ theme }) => theme.fonts.main};
      font-size: 1.3rem;
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

export default TagsPage
