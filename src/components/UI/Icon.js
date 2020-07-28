import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"

const Icon = ({ key, href, fixed, alt }) => {
  return (
    <a key={key} href={href}>
      <Icons fixed={fixed} alt={alt} />
    </a>
  )
}

const Icons = styled(Img)`
  width: 42px !important;
  height: 42px !important;

  @media (min-width: 1200px) {
    width: 60px !important;
    height: 60px !important;
  }
`

export default Icon
