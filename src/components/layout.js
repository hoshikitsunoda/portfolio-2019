import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Intro from "./Intro"
import Skills from "./Skills"
import Resume from "./Resume"
import { Helmet } from "react-helmet"

import "./layout.css"

import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Coda:800|Turret+Road:500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Intro />
        <Skills />
        <Resume />
        <footer></footer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  outline: none;
  overflow: hidden;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.35rem 1.0875rem 1.45rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
