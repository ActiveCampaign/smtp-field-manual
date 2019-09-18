import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Search from '../components/search'
import { algoliaIndices } from '../utils/algoliaIndices'

import { Github } from 'styled-icons/fa-brands/Github'
import { BookDead } from 'styled-icons/fa-solid/BookDead'

const Header = ({ siteTitle, hideSearch }) => (
  <header>
    <h1 className='logo'>
      <Link to='/'>
        <BookDead size='15px' css={'margin-right: 8px;'} />
        <span>{siteTitle}</span>
      </Link>
    </h1>

    <ul className='navigation' role='navigation'>
      {!hideSearch && (
        <li>
          <Search indices={algoliaIndices} size='small' />
        </li>
      )}

      <li>
        <Link to='/#codes' className='navigation_link'>
          SMTP Codes
        </Link>
      </li>
      <li>
        <Link to='/#providers' className='navigation_link'>
          Email Providers
        </Link>
      </li>
      <li>
        <Link to='/contribute' className='navigation_link'>
          Contribute
        </Link>
      </li>
      <li>
        <a
          href='https://github.com/wildbit/smtp-field-guide'
          target='_blank'
          rel='noopener noreferrer'
          className='navigation_github'
        >
          <Github size='22px' />
        </a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
