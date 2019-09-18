import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import styled from "styled-components"

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
      <Img
        fixed={data.profile.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}

export default Intro
