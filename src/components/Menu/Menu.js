import React from "react"
import { Link } from "@reach/router"

import Skills from "./MenuItem/Skills"
import Resume from "./MenuItem/Resume"
import Blog from "./MenuItem/Blog"

import styled from "styled-components"

const Menu = ({ urlParam }) => {
  let selectedMenu = null

  switch (urlParam) {
    case "/":
      selectedMenu = <Skills />
      break
    case "/resume":
      selectedMenu = <Resume />
      break
    case "/blog":
      selectedMenu = <Blog />
      break
    default:
      break
  }

  return (
    <Background>
      <ul>
        {["projects", "blog", "resume"].map(item => {
          const href = item === "projects" ? "" : item
          return (
            <li key={item}>
              <MenuItem
                role="button"
                tabIndex={0}
                isShowing={urlParam}
                className={item}
              >
                <CustomLink to={`/${href}`}>{item.toUpperCase()}:</CustomLink>
              </MenuItem>
            </li>
          )
        })}
      </ul>
      <IconWrapper>{selectedMenu}</IconWrapper>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark1};
  padding: 0 0.75rem 0.5rem;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;

    @media (min-width: 768px) {
      flex-direction: column;
    }
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

const CustomLink = styled(Link)`
  flex: 0 1 10%;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textAccent};
  margin: 0;
  text-shadow: 3px 3px 0 ${({ theme }) => theme.colors.dark1};
  text-decoration: none;

  @media (min-width: 768px) {
    text-shadow: 6px 6px 0 ${({ theme }) => theme.colors.dark1};
  }
`

const IconWrapper = styled.div`
  flex: 0 1 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.opaqueBg2};
  box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.dark1};
  border: 0.025rem solid ${({ theme }) => theme.colors.dark1};
  overflow: hidden;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-around;
    margin-left: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem;
    min-height: 105px;
    box-shadow: 6px 6px 0 ${({ theme }) => theme.colors.dark1};
  }
`

const MenuItem = styled.div`
  outline: none;
  opacity: 0.5;
  transition: 0.1s ease-in;
  cursor: pointer;

  &.resume {
    opacity: ${props => (props.isShowing === "/resume" ? 1 : 0.5)};
    &:hover {
      opacity: 1;
    }
  }

  &.projects {
    opacity: ${props => (props.isShowing === "/" ? 1 : 0.5)};
    &:hover {
      opacity: 1;
    }
  }

  &.blog {
    opacity: ${props => (props.isShowing === "/blog" ? 1 : 0.5)};
    &:hover {
      opacity: 1;
    }
  }
`

export default Menu
