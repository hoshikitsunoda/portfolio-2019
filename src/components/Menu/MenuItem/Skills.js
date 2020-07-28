import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Icon from "../../UI/Icon"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      javascriptIcon: file(relativePath: { eq: "skills/icon-javascript.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reactIcon: file(relativePath: { eq: "skills/icon-react.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nodejsIcon: file(relativePath: { eq: "skills/icon-nodejs.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mongodbIcon: file(relativePath: { eq: "skills/icon-mongoDB.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sassIcon: file(relativePath: { eq: "skills/icon-sass.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      photoshopIcon: file(relativePath: { eq: "skills/icon-photoshop.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      illustratorIcon: file(
        relativePath: { eq: "skills/icon-illustrator.png" }
      ) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      figmaIcon: file(relativePath: { eq: "skills/icon-figma.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      {Object.keys(data).map((item, i) => {
        return (
          <Icon
            section="skills"
            key={i}
            fixed={data[item].childImageSharp.fixed}
            alt={item.substring(0, item.length - 4)}
          />
        )
      })}
    </>
  )
}

export default Skills
