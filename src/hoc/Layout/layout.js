import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"

import "./layout.css"

import styled from "styled-components"

const Layout = ({ children, page }) => {
  return (
    <Wrapper page={page}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Coda:800|Open+Sans:400,600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>{children}</Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: ${({ page }) =>
    page !== "/" || page !== "/resume" ? "auto" : "100vh"};
  outline: none;
  overflow-y: hidden;
  max-width: 1200px;
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
