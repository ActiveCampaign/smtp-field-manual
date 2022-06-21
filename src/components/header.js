import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Search from '../components/search'
import { algoliaIndices } from '../utils/algoliaIndices'
import { Github } from 'styled-icons/fa-brands/Github'

const Header = ({ siteTitle, hideSearch, invertHeader }) => {
  const rootClass = cn('header', {
    'header--inverted': invertHeader,
  })

  return (
    <header className={rootClass}>
      <div className='header_container'>
        <span className='header_logo'>
          <Link to='/' className="header_logo-link">
            <span>{siteTitle}</span>
          </Link>
          <span className="header_postmark">by <span className="header_postmark-icon"></span><a href="https://postmarkapp.com" target="_blank" rel="noopener noreferrer">Postmark</a></span>
        </span>

        <ul className='navigation' role='navigation'>
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
            <Link to='/#spamfilters' className='navigation_link'>
              Spam Filters
            </Link>
          </li>
          <li>
            <Link to='/contribute' className='navigation_link'>
              Contribute
            </Link>
          </li>
          <li>
            <a
              href='https://github.com/activecampaign/smtp-field-guide'
              target='_blank'
              rel='noopener noreferrer'
              className='navigation_github u-no-underline'
            >
              <Github size='22px' />
            </a>
          </li>
        </ul>
      </div>
      {!hideSearch && (
        <div className='navigation_search'>
          <Search indices={algoliaIndices} />
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
