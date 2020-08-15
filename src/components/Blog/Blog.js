import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
      {allMarkdownRemark.edges.map(({ node }) => {
        return (
          <Panel key={node.frontmatter.slug}>
            <PanelTop>
              <div>
                <Time dateTime={node.frontmatter.date}>
                  {node.frontmatter.date}
                </Time>
              </div>
              <Title>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </Title>
            </PanelTop>
            <PanelBottom>
              <Excerpt>{node.excerpt}</Excerpt>
              <CustomLink to={node.frontmatter.slug}>Read more...</CustomLink>
            </PanelBottom>
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
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 65vh;
    padding: 1.25rem 4rem;
  }
`

const Panel = styled.div`
  flex: 0 0 100%;
  margin: 0 auto 0.5rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.main1};
  box-shadow: inset 7px 7px 15px ${({ theme }) => theme.colors.main2},
    inset -7px -7px 15px ${({ theme }) => theme.colors.main3};

  > * {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  @media (min-width: 900px) {
    flex: 0 0 calc(50% - 1rem);
    margin: 0.5rem;
  }
`

const PanelTop = styled.div`
  padding: 1rem 1rem 0;
`

const PanelBottom = styled.div`
  border-radius: 0 0 20px 20px;
  padding: 0.5rem 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.opaqueBg1};
  box-shadow: 0 -6px 10px -6px ${({ theme }) => theme.colors.opaqueBg1};

  > * {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

const Time = styled.time`
  font-size: 0.75rem;
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 0.2rem 0 1rem;
  transition: all 0.2s ease-in;
  min-height: 3.5rem;

  > a {
    color: ${({ theme }) => theme.colors.dark1};
    text-decoration: none;
    font-size: 1.25rem;
    transition: all 0.2s ease-in;
  }

  &:hover {
    > a {
      color: ${({ theme }) => theme.colors.textAccent};
    }
  }
`

const Excerpt = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark1};
  text-decoration: none;
  transition: all 0.2s ease-in;
  font-size: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

export default Blog
