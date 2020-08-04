import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Icon from "../UI/Icon"

import styled from "styled-components"

const Image = () => {
  const data = useStaticQuery(graphql`
    query Images {
      emailIcon: file(relativePath: { eq: "social/icon-email.png" }) {
        ...socialImage
      }
      githubIcon: file(relativePath: { eq: "social/icon-github.png" }) {
        ...socialImage
      }
      linkedinIcon: file(relativePath: { eq: "social/icon-linkedin.png" }) {
        ...socialImage
      }
      twitterIcon: file(relativePath: { eq: "social/icon-twitter.png" }) {
        ...socialImage
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
            section="social"
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

  @media (min-width: 500px) {
    justify-content: flex-end;
  }
`

export default Image
