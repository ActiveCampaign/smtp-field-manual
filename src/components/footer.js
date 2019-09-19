import React from 'react'
import pmLogo from '../images/postmark-stamp.svg'
import gatsbyLogo from '../images/gatsby-logo.svg'
import algoliaLogo from '../images/algolia-logo.svg'
import DividerGlitch from '../components/dividerGlitch'

const Footer = ({ siteTitle }) => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer_postmark'>
        <p>
          <a
            href='https://postmarkapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={pmLogo}
              alt='Postmark logo'
              className='footer_postmark-logo'
            />
          </a>
        </p>
        <p>
          Brought to you by{' '}
          <a
            href='https://postmarkapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Postmark
          </a>
          .
          <br />A super reliable email platform for web applications.
        </p>
      </div>

      <p>Built with</p>
      <p>
        <a
          href='https://gatsbyjs.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={gatsbyLogo} alt='' className='footer_built-logo' />
        </a>
        <a href='https://algolia.com' target='_blank' rel='noopener noreferrer'>
          <img src={algoliaLogo} alt='' className='footer_built-logo' />
        </a>
      </p>
    </div>
    <DividerGlitch updateOnScroll={false} />
  </footer>
)

export default Footer
