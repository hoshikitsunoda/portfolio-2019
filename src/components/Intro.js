import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fixed(width: 110, height: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <ProfileImg fixed={data.profile.childImageSharp.fixed} alt="Profile" />
      <TextWrapper>
        <p>
          My name is Hosh’ki Tsunoda. <br></br>Front End Developer. UI Designer.
          <br></br>Based in Orange County, CA.
        </p>
      </TextWrapper>
    </div>
  )
}

const ProfileImg = styled(Img)`
  display: block !important;
  margin: 0 auto -1rem;
`

const TextWrapper = styled.div`
  background-color: rgba(77, 77, 77, 0.3);
  text-align: center;
  padding: 1.55rem 0.5rem 0.5rem;

  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 0;
    letter-spacing: 0.1rem;
    line-height: 1.6rem;
  }
`

export default Intro
