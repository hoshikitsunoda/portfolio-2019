import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Icon from "./UI/Icon"

import styled from "styled-components"

const Image = () => {
  const data = useStaticQuery(graphql`
    query Images {
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
      site {
        siteMetadata {
          socialLinks
        }
      }
    }
  `)

  return (
    <Wrapper>
      {Object.keys(data).map((item, i) => {
        return item === "site" ? null : (
          <Icon
            href={data.site.siteMetadata.socialLinks[i]}
            key={i}
            fixed={data[item].childImageSharp.fixed}
            alt={item.substring(0, item.length - 4)}
          />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Image
