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
  background-color: #ffd64d;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.2rem 2.2rem 0.4rem;
`

export default Header
