import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      javascriptIcon: file(relativePath: { eq: "icon-javascript.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reactIcon: file(relativePath: { eq: "icon-react.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nodejsIcon: file(relativePath: { eq: "icon-nodejs.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mongodbIcon: file(relativePath: { eq: "icon-mongoDB.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sassIcon: file(relativePath: { eq: "icon-sass.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      photoshopIcon: file(relativePath: { eq: "icon-photoshop.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      illustratorIcon: file(relativePath: { eq: "icon-illustrator.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      figmaIcon: file(relativePath: { eq: "icon-figma.png" }) {
        childImageSharp {
          fixed(width: 28, height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Img fixed={data.javascriptIcon.childImageSharp.fixed} alt="javascript" />
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Skills
