import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../components/Header/header"
import Intro from "../../components/Intro"
import Menu from "../../components/Menu/Menu"
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
      </Helmet>
      <Container>
        <SEO title="Home" />
        <Flex>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Intro />
        </Flex>
        <Menu />
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
