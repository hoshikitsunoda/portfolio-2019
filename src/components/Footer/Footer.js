import React from "react"

import Intro from "../Intro"
import PostNavigation from "../PostNavigation/PostNavigation"
import SocialIcons from "../Header/SocialIcons"

import styled from "styled-components"

const Footer = ({ page, pageContext }) => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Intro />
          <SocialIcons />
        </Flex>
        {page === "blog" ? <PostNavigation pageContext={pageContext} /> : null}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.dark1};
  padding: 2rem 0 5rem;
`

const Container = styled.div`
  max-width: calc(1000px + 2rem);
  margin: 1rem auto 0;

  @media (min-width: 768px) {
    margin: 3rem auto 0;
  }
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
    !navigation ? "3rem 0.5rem 0 auto" : "3rem auto 0"};
`

export default Footer
