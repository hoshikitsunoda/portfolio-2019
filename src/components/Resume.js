import React from "react"
import { graphql, StaticQuery } from "gatsby"

import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const Resume = () => (
  <StaticQuery
    query={graphql`
      query {
        mobile: file(relativePath: { eq: "blurred-resume.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.mobile.childImageSharp.fluid
      return (
        <StyledBackground
          Tag="section"
          fluid={imageData}
          backgroundColor={`#FFD64D`}
        >
          <Overlay></Overlay>
        </StyledBackground>
      )
    }}
  />
)

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
`

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
`

export default Resume
