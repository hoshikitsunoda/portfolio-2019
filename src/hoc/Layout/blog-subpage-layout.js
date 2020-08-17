import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Button from "../../components/UI/Button"
import Footer from "../../components/Footer/Footer"
import SEO from "../../components/seo"

import styled from "styled-components"

const BlogSubpageLayout = ({ children, page, tagHeader }) => {
  const button =
    page === "posts" ? (
      <Link to="/">Go Back</Link>
    ) : (
      <Link to="/blog/list">All Posts</Link>
    )
  return (
    <Layout page={page}>
      <SEO title={page.charAt(0).toUpperCase() + page.slice(1)} />
      <ButtonWrapper>
        <Button>{button}</Button>
      </ButtonWrapper>
      <AccentBox />
      <Wrapper>
        <Container>
          <Heading>{page}</Heading>
          {tagHeader ? <TextWrapper>{tagHeader}</TextWrapper> : null}
          <ListWrapper page={page}>{children}</ListWrapper>
          {page === "result" ? <AllTags to="/tags">All tags</AllTags> : null}
        </Container>
        <Footer />
      </Wrapper>
    </Layout>
  )
}

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

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.textAccent};
  padding: 3.5rem 1rem 1rem;
  border: 3px solid ${({ theme }) => theme.colors.dark1};
  max-width: 1000px;
  margin: 2rem auto;
`

const Container = styled.div`
  max-width: 840px;
  margin: 0 auto 5rem;
`

const Heading = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 2rem;
  line-height: 2.8rem;
  text-transform: capitalize;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  margin: ${({ page }) => (page === "posts" ? "2rem 0" : "3.5rem 0")};

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
        color: ${({ theme }) => theme.colors.main1};
      }
    }
  }
`

const TextWrapper = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    margin: 0;
    line-height: 2.5rem;
  }

  span {
    color: ${({ theme }) => theme.colors.textAccent};
    font-family: ${({ theme }) => theme.fonts.bold};
    padding: 0.25rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.accent};
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
    color: ${({ theme }) => theme.colors.main1};
  }
`

export default BlogSubpageLayout
