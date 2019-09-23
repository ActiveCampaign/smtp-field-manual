import React from 'react'
import styled from 'styled-components'
import { Search } from 'styled-icons/fa-solid/Search'
import { Algolia } from 'styled-icons/fa-brands/Algolia'

export const Root = styled.div`
  position: relative;
`

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 15px;
  pointer-events: none;
  color: #ddd;

  ${({ styledSize }) =>
    styledSize === 'large' &&
    `
    left: 15px;
    width: 15px;
  `}

  ${({ styledSize }) =>
    styledSize === 'small' &&
    `
    left: 10px;
    width: 10px;
  `}
`

export const Input = styled.input`
  outline: none;
  border: none;
  background: #fff;
  border-radius: 4px;
  font-family: 'Roboto Mono', monospace;
  -webkit-appearance: none;

  ${({ size }) =>
    size === 'large' &&
    `
    width: 100%;
    font-size: 1rem;
    padding: 12px 12px 12px 45px;
  `}

  ${({ size }) =>
    size === 'small' &&
    `
    width: 200px;
    font-size: .9375rem;
    padding: 6px 6px 6px 25px;
  `}
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const HitsWrapper = styled.div`
  opacity: ${props => (props.show ? `1` : `0`)};
  visibility: ${props => (props.show ? `show` : `hidden`)};
  height: ${props => (props.show ? `auto` : `0`)};
  box-sizing: border-box;
  position: absolute;
  max-height: 50vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  right: 0;
  top: calc(100% + 0.5em);
  width: 100%;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  background: white;
  border-radius: 2px;
  text-align: left;
  transition: 100ms all linear;

  ${({ size }) =>
    size === 'large' &&
    `
    width: 100%;

    h3 {
      padding: 5px 45px;
    }

    li a {
      padding: 8px 45px;
    }
  `}

  ${({ size }) =>
    size === 'small' &&
    `
    width: 300px;

    h3 {
      padding: 5px 15px;
    }

    li a {
      padding: 8px 15px;
    }
  `}

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    margin: 0;
  }

  li a {
    display: block;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    background-image: none;
  }

  li a:hover {
    background-color: #fafafa;
    text-decoration: none;
    opacity: 1;
  }

  a {
    color: #3b377b;
  }

  mark {
    color: #3b377b;
    background: #ffcc00;
  }

  h3 {
    font-weight: 400;
    margin: 0;
    border-bottom: 1px solid #eee;
    color: #3b377b;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 11px;
  }

  h4 {
    margin: 0;
  }

  code {
    font-size: 11px;
    word-break: break-word;
    font-weight: normal;
  }
`

export const PoweredBy = () => (
  <p css='font-size: 12px; padding: 5px 15px; text-align: center; color: #3b377b;'>
    Powered by{` `}
    <a href='https://algolia.com' css='background-image: none;'>
      <Algolia size='1em' css='margin-right: 3px;' />
      Algolia
    </a>
  </p>
)
