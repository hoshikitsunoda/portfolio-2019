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
      fixed(width: 35, height: 35) {
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
    transition: 0.2s ease-in-out;
    border-radius: 50%;
    margin: 0; 
    opacity: 0.5;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 8px -5px rgba(0, 0, 0, 0.5);
      opacity: 1;
    }

    @media (min-width: 500px) {
      margin: 0 0 0 0.8rem;
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

    @media (min-width: 768px) {
      width: 50px !important;
      height: 50px !important;
    }

    @media (min-width: 1024px) {
      width: 74px !important;
      height: 74px !important;
    }
  `}
`

export default Icon
