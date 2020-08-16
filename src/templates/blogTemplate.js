import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../hoc/Layout/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const previousPost = pageContext.prev
    ? {
        url: `${pageContext.prev.frontmatter.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : null

  const nextPost = pageContext.next
    ? {
        url: `${pageContext.next.frontmatter.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : null

  const navigation =
    previousPost && nextPost
      ? "both"
      : previousPost
      ? "prev"
      : nextPost
      ? "next"
      : null

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
      </PostWrapper>
      <Flex navigation={navigation}>
        {previousPost && (
          <CustomLink to={previousPost.url}>← {previousPost.title}</CustomLink>
        )}
        {nextPost && (
          <CustomLink to={nextPost.url}>{nextPost.title} →</CustomLink>
        )}
      </Flex>
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
  background: ${({ theme }) => theme.colors.main1};
  padding: 2.5rem 0.5rem 2rem;
  box-shadow: 0px 30px 50px 0px rgba(1, 1, 1, 0.15);
  max-width: 1000px;
  margin: 2rem auto;

  @media (min-width: 768px) {
    padding: 3.5rem 0.5rem 5rem;
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
        color: ${({ theme }) => theme.colors.textAccent};
      }
    }
  }
`

const HeadingWrapper = styled.div`
  text-align: center;
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
    margin-bottom: 1rem;
    padding: 0;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: ${({ navigation }) =>
    navigation === "both"
      ? "space-between"
      : navigation === "next"
      ? "flex-end"
      : "flex-start"};
  align-items: center;
  margin: 3rem 0;
`

const CustomLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.dark1};
  transition: 0.2s ease-out;
  margin: 0 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

export default Template
