import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Intro from "./Intro"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Intro />
        <footer></footer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  outline: none;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.2rem 1.0875rem 1.45rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
