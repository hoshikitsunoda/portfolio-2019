import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      javascriptIcon: file(relativePath: { eq: "skills/icon-javascript.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reactIcon: file(relativePath: { eq: "skills/icon-react.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nodejsIcon: file(relativePath: { eq: "skills/icon-nodejs.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mongodbIcon: file(relativePath: { eq: "skills/icon-mongoDB.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sassIcon: file(relativePath: { eq: "skills/icon-sass.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      photoshopIcon: file(relativePath: { eq: "skills/icon-photoshop.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      illustratorIcon: file(
        relativePath: { eq: "skills/icon-illustrator.png" }
      ) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      figmaIcon: file(relativePath: { eq: "skills/icon-figma.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Background>
      <h1>SKILLS:</h1>
      <IconWrapper>
        <Img
          fixed={data.javascriptIcon.childImageSharp.fixed}
          alt="javascript"
        />
        <Img fixed={data.reactIcon.childImageSharp.fixed} alt="react" />
        <Img fixed={data.nodejsIcon.childImageSharp.fixed} alt="nodejs" />
        <Img fixed={data.mongodbIcon.childImageSharp.fixed} alt="mongodb" />
        <Img fixed={data.sassIcon.childImageSharp.fixed} alt="sass" />
        <Img fixed={data.photoshopIcon.childImageSharp.fixed} alt="photoshop" />
        <Img
          fixed={data.illustratorIcon.childImageSharp.fixed}
          alt="illustrator"
        />
        <Img fixed={data.figmaIcon.childImageSharp.fixed} alt="figma" />
      </IconWrapper>
    </Background>
  )
}

const Background = styled.div`
  background-color: rgba(77, 77, 77, 0.3);
  padding: 0 0.75rem 0.5rem;

  h1 {
    font-family: "Coda", cursive;
    font-size: 1.2rem;
    color: #fff;
    margin: 0;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 0.5rem;
`

export default Skills
