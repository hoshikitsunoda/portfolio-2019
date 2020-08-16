import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../hoc/Layout/layout"
import Button from "../components/UI/Button"
import Footer from "../components/Footer/Footer"
// import PostNavigation from "../components/PostNavigation/PostNavigation"
import SEO from "../components/seo"

import styled from "styled-components"

const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout page="blog">
      <SEO title={frontmatter.title} />
      <Button>
        <Link to="/blog/list">All Posts</Link>
      </Button>
      <AccentBox />
      <PostWrapper className="blog-post">
        <HeadingWrapper>
          <ListWrapper>
            {frontmatter.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tags/${tag.toLowerCase()}`}>
                  #{tag.toUpperCase()}
                </Link>
              </li>
            ))}
          </ListWrapper>
          <Title>{frontmatter.title}</Title>
          <PostDate>{frontmatter.date}</PostDate>
        </HeadingWrapper>
        <MainContent
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Footer pageContext={pageContext} page="blog" />
      </PostWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
      }
    }
  }
`

const AccentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.dark1};
  height: 25rem;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`

const PostWrapper = styled.div`
  background: ${({ theme }) => theme.colors.textAccent};
  padding: 2.5rem 0.5rem 0.5rem;
  box-shadow: 0px 30px 50px 0px rgba(1, 1, 1, 0.15);
  max-width: 1000px;
  margin: 2rem auto 2rem;
`

const ListWrapper = styled.ul`
  max-width: 400px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;

  li {
    margin: 0;

    a {
      font-family: ${({ theme }) => theme.fonts.main};
      font-size: 0.8rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.dark1};
      transition: 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.colors.main1};
      }
    }
  }
`

const HeadingWrapper = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 3.5rem;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`

const PostDate = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.9rem;
`

const MainContent = styled.div`
  max-width: 800px;
  margin: 2rem auto 0;
  padding: 0 1rem;
  font-family: ${({ theme }) => theme.fonts.main};

  @media (min-width: 768px) {
    margin: 3.5rem auto 0;
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 5rem;
    padding: 0;
  }
`

export default Template
