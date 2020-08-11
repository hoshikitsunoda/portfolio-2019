import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../hoc/Layout/layout"
import Resume from "../components/Resume/Resume"
import Projects from "../components/Projects/Projects"

import styled from "styled-components"
import { MenuContext } from "../context/menu"

import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isSelected, setIsSelected] = useState("skills")
  const value = { isSelected, setIsSelected }

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

  const data = useStaticQuery(graphql`
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
  `)

  const { desktop, mobile } = data

  const imageData = isDesktop
    ? desktop.childImageSharp.fluid
    : mobile.childImageSharp.fluid

  let selectedView = null

  switch (isSelected) {
    case "skills":
      selectedView = <Projects />
      break
    case "resume":
      selectedView = <Resume />
      break
    case "blog":
      selectedView = <h1>BLOG</h1>
      break
    default:
      break
  }

  return (
    <MenuContext.Provider value={value}>
      <StyledBackground
        Tag="section"
        fluid={imageData}
        backgroundColor={`#FFD64D`}
      >
        <Layout>{selectedView}</Layout>
      </StyledBackground>
    </MenuContext.Provider>
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
