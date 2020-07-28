import React from "react"

import styled from "styled-components"

import SocialIcons from "./SocialIcons"

const Header = () => (
  <Wrapper>
    <Container>
      <SocialIcons />
    </Container>
  </Wrapper>
)

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffd64d;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);

  @media (min-width: 767px) {
    position: relative;
    max-width: 24.278rem;
    width: 100%;
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    order: 1;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.2rem 2.2rem 0.4rem;
`

export default Header
