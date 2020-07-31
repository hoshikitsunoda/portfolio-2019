import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Icon from "../../UI/Icon"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      javascriptIcon: file(relativePath: { eq: "skills/icon-javascript.png" }) {
        ...skillsImage
      }
      reactIcon: file(relativePath: { eq: "skills/icon-react.png" }) {
        ...skillsImage
      }
      nodejsIcon: file(relativePath: { eq: "skills/icon-nodejs.png" }) {
        ...skillsImage
      }
      mongodbIcon: file(relativePath: { eq: "skills/icon-mongoDB.png" }) {
        ...skillsImage
      }
      sassIcon: file(relativePath: { eq: "skills/icon-sass.png" }) {
        ...skillsImage
      }
      photoshopIcon: file(relativePath: { eq: "skills/icon-photoshop.png" }) {
        ...skillsImage
      }
      illustratorIcon: file(
        relativePath: { eq: "skills/icon-illustrator.png" }
      ) {
        ...skillsImage
      }
      figmaIcon: file(relativePath: { eq: "skills/icon-figma.png" }) {
        ...skillsImage
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
