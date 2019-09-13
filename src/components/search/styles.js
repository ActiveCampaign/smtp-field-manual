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
  width: 15px;
  pointer-events: none;
  color: #ddd;
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1.25em;
  background: #fff;
  padding: 15px 15px 15px 45px;
  border-radius: 4px;
  width: 100%;
  font-family: 'Source Code Pro', monospace;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `block` : `none`)};
  box-sizing: border-box;
  position: absolute;
  max-height: 80vh;
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

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
  }

  a {
    color: #3b377b;
  }

  mark {
    color: #3b377b;
    background: #ffcc00;
  }

  h3 {
    margin: 0 0 0.5em;
  }

  h4 {
    margin-bottom: 0.3em;
  }
`

export const PoweredBy = () => (
  <p css='font-size: 12px; padding: 5px 15px; text-align: center;'>
    Powered by{` `}
    <a href='https://algolia.com'>
      <Algolia size='1em' css='margin-right: 3px;' />
      Algolia
    </a>
  </p>
)
