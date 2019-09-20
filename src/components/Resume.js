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
          <Inner>
            <a
              rel="noopener noreferrer"
              href={
                "https://www.dropbox.com/s/xmhtxzpgh7dwhx8/resume-hoshki-tsunoda-0819.pdf?dl=0"
              }
              target="_blank"
            >
              <button>
                View My<br></br>Resume
              </button>
            </a>
          </Inner>
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

const Inner = styled.div`
  width: 100%;
  height: 100vh;

  a {
    text-decoration: none;

    button {
      display: block;
      width: 80%;
      position: relative;
      top: 3.5rem;
      margin: 0 auto;
      padding: 0.8rem 1rem;
      border: 0.3rem solid #f52549;
      background: transparent;
      color: #f52549;
      font-family: "Coda", cursive;
      text-transform: uppercase;
      font-size: 2.2rem;
      line-height: 2.9rem;
      outline: none;
    }
  }
`

export default Resume
