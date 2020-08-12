import React from "react"

import styled from "styled-components"

const Resume = () => {
  return (
    <div>
      <Heading>
        RESUMERESUMERESUMERESUMERESUMERESUMERESUMERESUMERESUMERESUMERESUMERESUMERESUMERESUME
      </Heading>
    </div>
  )
}

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 0;
  padding: 0.125rem 0.125rem 0.125rem 0;
  color: ${({ theme }) => theme.colors.textAccent};
  font-size: 16px;
  margin-left: -2rem;

  @media (min-width: 768px) {
    padding-left: 1rem;
    font-size: 32px;
    margin-left: -4rem;
  }
`

export default Resume
