import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../../hoc/Layout/layout"
import SEO from "../../components/seo"

import styled from "styled-components"

const BlogListPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <Button>
          <Link to="/">Go Back</Link>
        </Button>
        <TagsWrapper>
          <Container>
            <div>
              <Heading>All Posts</Heading>
              <ListWrapper>
                {edges.map(({ node: { excerpt, frontmatter } }) => {
                  return (
                    <Panel key={frontmatter.slug}>
                      <PanelTop>
                        <div>
                          <Time dateTime={frontmatter.date}>
                            {frontmatter.date}
                          </Time>
                        </div>
                        <Title>
                          <Link to={frontmatter.slug}>{frontmatter.title}</Link>
                        </Title>
                      </PanelTop>
                      <PanelBottom>
                        <Excerpt>{excerpt}</Excerpt>
                        <CustomLink to={frontmatter.slug}>
                          Read more...
                        </CustomLink>
                      </PanelBottom>
                    </Panel>
                  )
                })}
              </ListWrapper>
            </div>
          </Container>
        </TagsWrapper>
      </Layout>
    </>
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

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 0 auto 0 0;
  display: block;
  background: none;
  border: 3px solid ${({ theme }) => theme.colors.accent};
  outline: none;
  cursor: pointer;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accent}
  );
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.3s, color 0.5s;

  > a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    font-size: 0.9rem;
    display: block;
    padding: 0.25rem 0.75rem;
  }

  &:hover {
    background-size: 100% 100%;

    > a {
      color: ${({ theme }) => theme.colors.dark2};
    }
  }
`

const Heading = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 2rem;
  line-height: 2.8rem;
`

const ListWrapper = styled.div`
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

export default BlogListPage
