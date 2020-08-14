import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const Resume = () => {
  const { mobile, site } = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "blurred-resume.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          resumeUrl
        }
      }
    }
  `)

  const imageData = mobile.childImageSharp.fluid
  return (
    <StyledBackground
      Tag="section"
      fluid={imageData}
      backgroundColor={`#FFD64D`}
    >
      <Inner>
        <a
          rel="noopener noreferrer"
          href={site.siteMetadata.resumeUrl}
          target="_blank"
        >
          <button>
            View My<br></br>Resume
          </button>
        </a>
      </Inner>
    </StyledBackground>
  )
}

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  max-width: 960px;
  height: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;

  @media (min-width: 768px) {
    &::before {
      background-size: cover !important;
    }
  }
`

const Inner = styled.div`
  width: 100%;
  height: 50vh;

  @media (min-width: 768px) {
    height: 65vh;
    padding: 1.25rem 4rem;
  }

  a {
    text-decoration: none;

    button {
      display: block;
      width: 80%;
      position: relative;
      top: 3.5rem;
      margin: 0 auto;
      padding: 0.8rem 1rem;
      border: 0.3rem solid ${({ theme }) => theme.colors.accent};
      background: transparent;
      color: ${({ theme }) => theme.colors.accent};
      font-family: "Coda", cursive;
      text-transform: uppercase;
      font-size: 2.2rem;
      line-height: 2.9rem;
      outline: none;
      cursor: pointer;
      background-image: linear-gradient(
        ${({ theme }) => theme.colors.accent},
        ${({ theme }) => theme.colors.accent}
      );
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size 0.5s, color 0.5s;

      &:hover {
        background-size: 100% 100%;
        color: ${({ theme }) => theme.colors.dark2};
      }

      @media (min-width: 768px) {
        width: 40%;
      }
    }
  }
`

export default Resume
