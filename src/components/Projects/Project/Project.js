import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"

const Project = ({ data, images }) => {
  let featuredImgFluid = ""

  images.edges.forEach(item => {
    let splitArray = item.node.childImageSharp.fluid.src.split("/")
    splitArray = splitArray[splitArray.length - 1]

    const fileName = splitArray.substring(0, splitArray.length - 4)

    let projectName = data.slug.split("/")
    projectName = projectName[projectName.length - 1]

    if (fileName === projectName) {
      featuredImgFluid = item.node.childImageSharp.fluid
    }
    return featuredImgFluid
  })

  return (
    <FlexContainer>
      <ImageWrapper>
        <FeaturedImage fluid={featuredImgFluid} className="image-wrapper" />
        <LinkWrapper>
          {data.githubUrl && (
            <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {data.projectUrl && (
            <a href={data.projectUrl} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </LinkWrapper>
      </ImageWrapper>
      <TextWrapper>
        <Title>{data.title}</Title>
        <p>{data.description}</p>
        <SubHeading>technologies used:</SubHeading>
        <List>
          {data.technologies.map(tech => {
            return <li key={tech}>{tech}</li>
          })}
        </List>
      </TextWrapper>
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 1rem;

  @media (min-width: 960px) {
    width: 50%;
  }
`

const FeaturedImage = styled(Img)`
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Coda", cursive;
  margin-top: 1rem;

  & a {
    padding: 0 0.5rem;
    margin: 0 0.25rem;
    font-size: 14px;
    border: 3px solid #f52549;
    color: #f52549;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    background-image: linear-gradient(#f52549, #f52549);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: 0.2s ease-in;

    &:hover {
      background-size: 100% 100%;
      color: #031c27;
    }
  }
`

const TextWrapper = styled.div`
  width: 100%;
  padding: 0;

  & * {
    font-family: "Coda", cursive;
    color: #011a27;
  }

  & p {
    font-family: "Coda", cursive;
    font-weight: 200;
  }

  @media (min-width: 960px) {
    width: 50%;
    padding: 1.25rem;
  }
`

const Title = styled.h2`
  font-family: "Coda", cursive;
  color: #fff;
  margin: 0 0 0.5rem 0;
`

const SubHeading = styled.p`
  margin: 0;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  & li {
    padding: 0 0.5rem;
    margin: 0.25rem 0;
    font-size: 14px;
    border: 3px solid #011a27;
  }
`

export default Project
