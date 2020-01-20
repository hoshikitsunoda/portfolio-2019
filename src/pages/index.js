import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = { isDesktop: false }

  componentDidMount() {
    this.checkWindowWidth()
    window.addEventListener("resize", this.checkWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkWindowWidth)
  }

  checkWindowWidth = () => {
    this.setState({ isDesktop: window.innerWidth > 767 })
  }

  render() {
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
        render={data => {
          const isDesktop = this.state.isDesktop
          const imageData = isDesktop
            ? data.desktop.childImageSharp.fluid
            : data.mobile.childImageSharp.fluid
          return (
            <StyledBackground
              Tag="section"
              fluid={imageData}
              backgroundColor={`#FFD64D`}
            >
              <Layout>
                <SEO title="Home" />
              </Layout>
            </StyledBackground>
          )
        }}
      />
    )
  }
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
