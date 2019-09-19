import React from "react"
import { graphql, StaticQuery } from "gatsby"

import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const Resume = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "blurred-resume.png" }) {
          childImageSharp({
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          })
        }
      }
    `}
  />
)

export default Resume
