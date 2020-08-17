import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const PostNavigation = ({ pageContext }) => {
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
    <Wrapper>
      <Container navigation={navigation}>
        {previousPost && (
          <CustomLink to={previousPost.url}>
            <p>PREVIOUS</p>
            <Title>{previousPost.title}</Title>
          </CustomLink>
        )}
        {nextPost && (
          <CustomLink to={nextPost.url}>
            <p>NEXT</p>
            <Title>{nextPost.title}</Title>
          </CustomLink>
        )}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark1};
  padding: 0 0 1rem;
`

const Container = styled.div`
  max-width: calc(1000px + 2rem);
`

const CustomLink = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.main};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main1};
  transition: 0.2s ease-out;
  margin: 0 1.5rem;
  padding: 1rem 0;
  border-bottom: 5px solid ${({ theme }) => theme.colors.main1};

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }

  p {
    margin: 1.45rem 0 1rem;
    font-size: 0.8rem;
  }
`

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.bold};
`

export default PostNavigation
