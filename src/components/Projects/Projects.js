import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Project from "./Project/Project"

import styled from "styled-components"

const Projects = () => {
  const { allMarkdownRemark, allFile } = useStaticQuery(graphql`
    query Project {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(project)/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              description
              projectUrl
              githubUrl
              technologies
            }
          }
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "project-images" } }) {
        edges {
          node {
            extension
            dir
            modifiedTime
            childImageSharp {
              fluid(quality: 90, maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper className="project-wrapper">
      {allMarkdownRemark.edges.map(item => {
        return (
          <Project
            key={item.node.frontmatter.title}
            data={item.node.frontmatter}
            images={allFile}
          />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  overflow: auto;
  height: 50vh;
  padding: 1.25rem 1rem;

  @media (min-width: 768px) {
    height: 65vh;
    padding: 1.25rem 4rem;
  }
`

export default Projects
