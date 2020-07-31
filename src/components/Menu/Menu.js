import React, { useState } from "react"

import Skills from "./MenuItem/Skills"
import Resume from "./MenuItem/Resume"

import styled from "styled-components"

const Menu = () => {
  const [isShowing, setIsShowing] = useState("skills")

  const clickHandler = event => {
    event.preventDefault()
    event.stopPropagation()
    const text = event.target.innerHTML
    setIsShowing(text.toLowerCase().slice(0, text.length - 1))
  }

  return (
    <Background>
      <ul>
        {["skills", "resume"].map(item => {
          return (
            <li key={item}>
              <MenuItem
                role="button"
                tabIndex={0}
                onClick={event => clickHandler(event)}
                onKeyDown={event => clickHandler(event)}
                isShowing={isShowing}
                className={item}
              >
                <h2>{item.toUpperCase()}:</h2>
              </MenuItem>
            </li>
          )
        })}
      </ul>
      <IconWrapper>
        {isShowing === "skills" ? <Skills /> : <Resume />}
      </IconWrapper>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(77, 77, 77, 0.3);
  padding: 0 0.75rem 0.5rem;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;

    h2 {
      flex: 0 1 10%;
      font-family: "Coda", cursive;
      font-size: 1.2rem;
      color: #fff;
      margin: 0;
      text-shadow: 3px 3px 0 #011a27;
    }

    @media (min-width: 768px) {
      flex-direction: column;

      h2 {
        text-shadow: 6px 6px 0 #011a27;
      }
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

const IconWrapper = styled.div`
  flex: 0 1 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.2rem 0.5rem;
  min-height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 3px 3px 0 #011a27;
  border: 0.025rem solid #011a27;

  @media (min-width: 768px) {
    align-items: center;
    margin-left: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem;
    min-height: 105px;
    box-shadow: 6px 6px 0 #011a27;
  }
`

const MenuItem = styled.div`
  outline: none;
  opacity: 0.5;
  transition: 0.1s ease-in;

  &.resume {
    opacity: ${props => (props.isShowing === "resume" ? 1 : 0.5)};
    &:hover {
      opacity: 1;
    }
  }

  &.skills {
    opacity: ${props => (props.isShowing === "skills" ? 1 : 0.5)};
    &:hover {
      opacity: 1;
    }
  }
`

export default Menu
