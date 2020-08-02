import React from "react"

import styled from "styled-components"

const Resume = () => {
  return (
    <div>
      <Heading>RESUMERESUMERESUMERESUMERESUMERESUMERESUME</Heading>
    </div>
  )
}

const Heading = styled.h2`
  font-family: "Coda", cursive;
  margin: 0;
  padding: 0.125rem 0.125rem 0.125rem 0;
  color: #fff;
  font-size: 16px;
  margin-left: -2rem;

  @media (min-width: 768px) {
    padding-left: 1rem;
    font-size: 32px;
    margin-left: -4rem;
  }
`

export default Resume
