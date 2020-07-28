import React from "react"

import Skills from "./MenuItem/Skills"

import styled from "styled-components"

const Menu = () => {
  return (
    <Background>
      <h1>SKILLS:</h1>
      <IconWrapper>
        <Skills />
      </IconWrapper>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(77, 77, 77, 0.3);
  padding: 0 0.75rem 0.5rem;

  h1 {
    flex: 0 1 10%;
    font-family: "Coda", cursive;
    font-size: 1.2rem;
    color: #fff;
    margin: 0;
    text-shadow: 6px 6px 0 #011a27;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1.25rem 1.75rem 0.5rem;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 1rem;
    }
  }
`

const IconWrapper = styled.div`
  flex: 0 1 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0 0.2rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
    box-shadow: 6px 6px 0 #011a27;
    border: 0.025rem solid #011a27;
    margin-bottom: 1rem;
    padding: 0.75rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export default Menu
