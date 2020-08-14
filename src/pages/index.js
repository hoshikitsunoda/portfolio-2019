import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../hoc/Layout/layout"
import Header from "../components/Header/header"
import Intro from "../components/Intro"
import Menu from "../components/Menu/Menu"
import Projects from "../components/Projects/Projects"
import SEO from "../components/seo"

import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const Blog = React.lazy(() => import("../components/Blog/Blog"))
const Resume = React.lazy(() => import("../components/Resume/Resume"))

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </React.Suspense>
)

const IndexPage = ({ location }) => {
  const [isDesktop, setIsDesktop] = useState(false)

  const urlParam = location.pathname

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

  return (
    <>
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
          <CustomRouter>
            <Projects path="/" />
            <LazyComponent Component={Blog} path="/blog" />
            <LazyComponent Component={Resume} path="resume" />
          </CustomRouter>
        </Layout>
      </StyledBackground>
    </>
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

const CustomRouter = styled(Router)`
  height: 100%;
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
