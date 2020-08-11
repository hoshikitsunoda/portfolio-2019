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
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  margin: 0.5rem auto;
  box-shadow: inset 5px 5px 9px #d9b641, inset -5px -5px 9px #fff659;
  border-radius: 2rem;
  background-color: #ffd64d;
  z-index: 10;

  @media (min-width: 500px) {
    width: auto;
  }

  @media (min-width: 767px) {
    position: relative;
    max-width: 24.278rem;
    left: 0;
    transform: translate(0, 0);
    margin: 0;
  }

  @media (min-width: 1024px) {
    order: 1;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.5rem 0.4rem;
`

export default Header
