import React, { Component } from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

class Skills extends Component {
  state = {
    hovered: false,
  }

  onHover = () => {
    console.log(this.state.hovered)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            javascriptIcon: file(
              relativePath: { eq: "skills/icon-javascript.png" }
            ) {
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
            photoshopIcon: file(
              relativePath: { eq: "skills/icon-photoshop.png" }
            ) {
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
        `}
        render={data => {
          return (
            <Background>
              <h1>SKILLS:</h1>
              <IconWrapper>
                <Icons
                  fixed={data.javascriptIcon.childImageSharp.fixed}
                  alt="javascript"
                  onMouseOver={this.onHover}
                />
                <Icons
                  fixed={data.reactIcon.childImageSharp.fixed}
                  alt="react"
                />
                <Icons
                  fixed={data.nodejsIcon.childImageSharp.fixed}
                  alt="nodejs"
                />
                <Icons
                  fixed={data.mongodbIcon.childImageSharp.fixed}
                  alt="mongodb"
                />
                <Icons fixed={data.sassIcon.childImageSharp.fixed} alt="sass" />
                <Icons
                  fixed={data.photoshopIcon.childImageSharp.fixed}
                  alt="photoshop"
                />
                <Icons
                  fixed={data.illustratorIcon.childImageSharp.fixed}
                  alt="illustrator"
                />
                <Icons
                  fixed={data.figmaIcon.childImageSharp.fixed}
                  alt="figma"
                />
              </IconWrapper>
            </Background>
          )
        }}
      />
    )
  }
}

const Background = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(77, 77, 77, 0.3);
  padding: 0 0.75rem 0.5rem;

  h1 {
    flex: 0 1 10%;
    font-family: "Coda", cursive;
    font-size: 1.2rem;
    color: #fff;
    margin: 0;
    text-shadow: 6px 6px 0 #011a27;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1.25rem 1.75rem 0.5rem;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 1rem;
    }
  }
`

const IconWrapper = styled.div`
  flex: 0 1 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0 0.2rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
    box-shadow: 6px 6px 0 #011a27;
    border: 0.025rem solid #011a27;
    margin-bottom: 1rem;
    padding: 0.75rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const Icons = styled(Img)`
  box-sizing: content-box;
  width: 32px !important;
  height: 32px !important;
  /* border: 0.125rem solid #ffd64d; */
  /* background-color: #ffd64d; */
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  z-index: 1;

  :hover {
    transform: scale(1.25);
    z-index: 3;
  }

  @media (min-width: 1024px) {
    width: 74px !important;
    height: 74px !important;
  }
`

export default Skills
