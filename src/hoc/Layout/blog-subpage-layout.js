import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
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
      <SEO title={page} />
      <Button>{button}</Button>
      <TagsWrapper>
        <Container>
          <Heading>{page}</Heading>
          {tagHeader ? <TextWrapper>{tagHeader}</TextWrapper> : null}
          <ListWrapper page={page}>{children}</ListWrapper>
          {page === "result" ? <AllTags to="/tags">All tags</AllTags> : null}
        </Container>
      </TagsWrapper>
    </Layout>
  )
}

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
        color: ${({ theme }) => theme.colors.textAccent};
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
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

export default BlogSubpageLayout
