import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const Icon = ({ section, href, fixed, alt }) => {
  return section === "social" ? (
    <a href={href}>
      <Icons section={section} fixed={fixed} alt={alt} />
    </a>
  ) : (
    <Icons section={section} fixed={fixed} alt={alt} />
  )
}

export const socialImage = graphql`
  fragment socialImage on File {
    childImageSharp {
      fixed(width: 60, height: 60) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const skillsImage = graphql`
  fragment skillsImage on File {
    childImageSharp {
      fixed(width: 74, height: 74) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const Icons = styled(Img)`
  ${({ section }) =>
    section === "social" &&
    `
    width: 42px !important;
    height: 42px !important;
    transition: 0.2s ease-in-out;
    border-radius: 50%;

    @media (min-width: 1200px) {
      width: 60px !important;
      height: 60px !important;
    }

    &:hover {
      border: 3px solid #011a27;
    }
  `}

  ${({ section }) =>
    section === "skills" &&
    `
    box-sizing: content-box;
    width: 32px !important;
    height: 32px !important;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    z-index: 1;

    @media (min-width: 1024px) {
      width: 74px !important;
      height: 74px !important;
    }

    &:hover {
      border: 3px solid #FFD64D;
      border-radius: 50%;
    }
  `}
`

export default Icon
