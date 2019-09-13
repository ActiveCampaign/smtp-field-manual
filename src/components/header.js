import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Search from './search'

import { Github } from 'styled-icons/fa-brands/Github'
import { BookDead } from 'styled-icons/fa-solid/BookDead'

const Header = ({ siteTitle }) => (
  <header>
    <h1 className='logo'>
      <Link to='/'>
        <BookDead size='18px' css={'margin-right: 8px;'} />
        <span>{siteTitle}</span>
      </Link>
    </h1>

    <ul className='navigation' role='navigation'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/contribute'>Contribute</Link>
      </li>
      <li>
        <a
          href='https://github.com/wildbit/smtp-field-guide'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github size='22px' />
        </a>
      </li>
    </ul>
    {/* <Search indices={searchIndices} /> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
