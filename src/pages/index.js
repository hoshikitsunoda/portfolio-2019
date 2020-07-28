import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../hoc/Layout/layout"
import Resume from "../components/Resume/Resume"

import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  const checkWindowWidth = () => {
    setIsDesktop(window.innerWidth > 767)
  }

  useEffect(() => {
    checkWindowWidth()
    window.addEventListener("resize", checkWindowWidth())
  }, [])

  useEffect(() => {
    window.removeEventListener("resize", checkWindowWidth())
  }, [])

  return (
    <StaticQuery
      query={graphql`
        query {
          mobile: file(relativePath: { eq: "bg-mobile.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          desktop: file(relativePath: { eq: "bg-desktop.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={({ desktop, mobile }) => {
        const imageData = isDesktop
          ? desktop.childImageSharp.fluid
          : mobile.childImageSharp.fluid
        return (
          <StyledBackground
            Tag="section"
            fluid={imageData}
            backgroundColor={`#FFD64D`}
          >
            <Layout>
              <Resume />
            </Layout>
          </StyledBackground>
        )
      }}
    />
  )
}

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;

  @media (min-width: 767px) {
    background-position: top center !important;
  }
`

export default IndexPage
