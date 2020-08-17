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
          <Intro page={page} />
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
  padding: 0 0 1.5rem;
`

const Container = styled.div`
  max-width: calc(1000px + 2rem);
  margin: 1rem auto 0;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ navigation }) =>
    navigation === "both" || !navigation
      ? "space-between"
      : navigation === "next"
      ? "flex-end"
      : "flex-start"};
  align-items: center;
  margin: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: ${({ navigation }) => (!navigation ? "0 0.5rem 0 auto" : "0 auto")};
  }
`

export default Footer
