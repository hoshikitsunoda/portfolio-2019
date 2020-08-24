import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../hoc/Layout/layout"
import Button from "../components/UI/Button"
import Footer from "../components/Footer/Footer"
import Img from "gatsby-image"
import Share from "../components/UI/Share"
import SEO from "../components/seo"

import styled from "styled-components"

const Template = ({ data, pageContext }) => {
  const {
    markdownRemark,
    site: { siteMetadata },
  } = data
  const { frontmatter, html, fields } = markdownRemark
  const { twitterHandle, url } = siteMetadata

  const tagArray = []
  frontmatter.tags.map(tag => {
    return tagArray.push(tag)
  })

  let fluidImg = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout page="blog">
      <SEO title={frontmatter.title} />
      <ButtonWrapper>
        <Button>
          <Link to="/blog/list">All Posts</Link>
        </Button>
      </ButtonWrapper>
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
          <Img fluid={fluidImg} alt={frontmatter.title} />
        </HeadingWrapper>
        <MainContent
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <ShareWrapper>
          <p>Share this post on:</p>
          <Share
            tags={tagArray}
            url={`${url}/blog${fields.slug}`}
            twitterHandle={twitterHandle}
            title={frontmatter.title}
          />
        </ShareWrapper>
        <Footer pageContext={pageContext} page="blog" />
      </PostWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        twitterHandle
        url
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
        tags
      }
      fields {
        slug
      }
    }
  }
`

const ButtonWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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
  padding: 2.5rem 0.5rem 1rem;
  max-width: 1000px;
  margin: 2rem auto 2rem;
  border: 3px solid ${({ theme }) => theme.colors.dark1};

  @media (min-width: 768px) {
    padding: 2.5rem 1rem 1rem;
  }
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
  padding: 0;

  @media (min-width: 768px) {
    margin: 3.5rem auto 0;
    padding: 0 2rem;
  }
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

const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0 0;

  p {
    margin: 0 0 0.4rem 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.bold};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 0 1rem 0;
  }
`

export default Template
