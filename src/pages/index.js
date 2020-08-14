import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../hoc/Layout/layout"
import Header from "../components/Header/header"
import Intro from "../components/Intro"
import Menu from "../components/Menu/Menu"
import Blog from "../components/Blog/Blog"
import SEO from "../components/seo"

import styled from "styled-components"
import { MenuContext } from "../context/menu"

import BackgroundImage from "gatsby-background-image"

const Projects = React.lazy(() => import("../components/Projects/Projects"))
const Resume = React.lazy(() => import("../components/Resume/Resume"))

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </React.Suspense>
)

const IndexPage = ({ location }) => {
  const [isDesktop, setIsDesktop] = useState(false)

  const [isSelected, setIsSelected] = useState("skills")
  const value = { isSelected, setIsSelected }

  const urlParam = location.pathname

  console.log(urlParam)

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

  // let selectedView = null
  // console.log(isSelected)
  // switch (isSelected) {
  //   case "skills":
  //     selectedView = <Projects path="/skills" />
  //     break
  //   case "resume":
  //     selectedView = <Resume path="/resume" />
  //     break
  //   case "blog":
  //     selectedView = <Blog path="/blog" />
  //     break
  //   default:
  //     break
  // }

  return (
    <MenuContext.Provider value={value}>
      <StyledBackground
        Tag="section"
        fluid={imageData}
        backgroundColor={`#FFD64D`}
      >
        <SEO title="Home" />
        <Layout>
          <Flex>
            <Header />
            <Intro />
          </Flex>
          <Menu urlParam={urlParam} />
          {/* {selectedView} */}
          <Router>
            <Blog path="blog" />
            <LazyComponent Component={Projects} path="/" />
            <LazyComponent Component={Resume} path="resume" />
          </Router>
        </Layout>
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export default IndexPage
