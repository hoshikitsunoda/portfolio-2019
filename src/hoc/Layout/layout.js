import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../components/header"
import Intro from "../../components/Intro"
import Skills from "../../components/Skills"
import { Helmet } from "react-helmet"
import SEO from "../../components/seo"

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
          href="https://fonts.googleapis.com/css?family=Coda:800|Open+Sans:400,600&display=swap"
          rel="stylesheet"
        />
        <SEO title="Home" />
      </Helmet>
      <Container>
        <Flex>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Intro />
        </Flex>
        <Skills />
        {children}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  outline: none;
  overflow-y: hidden;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 767px) {
    padding: 0 3rem;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.35rem 1.0875rem 1.45rem;

  @media (min-width: 768px) {
    padding-top: 2.5rem;
  }
`

const Flex = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
