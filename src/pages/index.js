import React from "react"
import { graphql, StaticQuery } from "gatsby"

import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        mobile: file(relativePath: { eq: "bg-image-hoshki-kana.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.mobile.childImageSharp.fluid
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

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default IndexPage
