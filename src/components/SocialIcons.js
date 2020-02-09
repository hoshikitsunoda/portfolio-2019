import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      emailIcon: file(relativePath: { eq: "social/icon-email.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubIcon: file(relativePath: { eq: "social/icon-github.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinIcon: file(relativePath: { eq: "social/icon-linkedin.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitterIcon: file(relativePath: { eq: "social/icon-twitter.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <a href="mailto: contact@hoshki.me">
        <Icons fixed={data.emailIcon.childImageSharp.fixed} alt="email" />
      </a>
      <a
        href="https://github.com/hoshikitsunoda"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons fixed={data.githubIcon.childImageSharp.fixed} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/hoshki-tsunoda/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons fixed={data.linkedinIcon.childImageSharp.fixed} alt="linkedin" />
      </a>
      <a
        href="https://twitter.com/hoshkitsunoda"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons fixed={data.twitterIcon.childImageSharp.fixed} alt="twitter" />
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icons = styled(Img)`
  width: 42px !important;
  height: 42px !important;

  @media (min-width: 1200px) {
    width: 60px !important;
    height: 60px !important;
  }
`

export default Image
