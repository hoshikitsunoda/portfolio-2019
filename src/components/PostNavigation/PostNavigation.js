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
      <Container>
        <Flex navigation={navigation}>
          {previousPost && (
            <CustomLink to={previousPost.url}>
              ← {previousPost.title}
            </CustomLink>
          )}
          {nextPost && (
            <CustomLink to={nextPost.url}>{nextPost.title} →</CustomLink>
          )}
        </Flex>
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

const Flex = styled.div`
  display: flex;
  justify-content: ${({ navigation }) =>
    navigation === "both" || !navigation
      ? "space-between"
      : navigation === "next"
      ? "flex-end"
      : "flex-start"};
  align-items: center;
  margin: ${({ navigation }) =>
    !navigation ? "3rem 0.5rem 4rem auto" : "0 auto 4rem"};
`

const CustomLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.main1};
  transition: 0.2s ease-out;
  margin: 0 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

export default PostNavigation
