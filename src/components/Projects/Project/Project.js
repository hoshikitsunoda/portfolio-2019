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
        <Description
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        />
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
  margin-bottom: 2rem;
  padding: 2rem;
  box-shadow: inset 10px 10px 30px ${({ theme }) => theme.colors.main2},
    inset -10px -10px 30px ${({ theme }) => theme.colors.main3};
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.main1};

  @media (min-width: 960px) {
    flex-direction: row;
    padding: 2.5rem;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 960px) {
    width: 60%;
  }
`

const FeaturedImage = styled(Img)`
  box-shadow: 0 12px 15px ${({ theme }) => theme.colors.opaqueBg1};
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 1rem 0;

  & a {
    padding: 0 0.5rem;
    margin: 0 0.25rem;
    font-size: 12px;
    border: 3px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    outline: none;
    cursor: pointer;
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accent}
    );
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: 0.1s ease-in;

    &:hover {
      background-size: 100% 100%;
      color: ${({ theme }) => theme.colors.dark2};
      box-shadow: 0 8px 10px -6px ${({ theme }) => theme.colors.opaqueBg1};
      transform: scale(1.08);
    }

    @media (min-width: 960px) {
      font-size: 14px;
    }
  }
`

const TextWrapper = styled.div`
  width: 100%;
  padding: 0;

  & * {
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark1};
  }

  @media (min-width: 960px) {
    width: 40%;
    padding: 1.25rem;
  }
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textAccent};
  margin: 0 0 1.5rem 0;
`

const SubHeading = styled.p`
  margin: 0;
`

const Description = styled.p`
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: bold;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  & li {
    padding: 0 0.5rem;
    margin: 0.25rem 0;
    font-size: 14px;
    border: 3px solid ${({ theme }) => theme.colors.dark1};
    text-transform: capitalize;
  }

  @media (min-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`

export default Project
