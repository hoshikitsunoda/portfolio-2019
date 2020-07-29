import React from "react"

import styled from "styled-components"

const Resume = () => {
  return (
    <div>
      <Heading>CURRENT RESUME</Heading>
    </div>
  )
}

const Heading = styled.h2`
  margin: 0;
  padding: 0.125rem 0.125rem 0.125rem 0;
  color: #fff;
  text-shadow: 3px 3px 0 #011a27;
  font-size: 16px;

  @media (min-width: 768px) {
    padding-left: 1rem;
    font-size: 32px;
    text-shadow: 6px 6px 0 #011a27;
  }
`

export default Resume
