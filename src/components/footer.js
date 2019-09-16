import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className='container'>
      <div className='footer-postmark'>
        <p>Logo</p>
        <p>
          Brought to you by Postmark.
          <br />A super reliable email platform for web applications.
        </p>
      </div>

      <p>Built with</p>
      <p>
        <a href='https://gatsbyjs.com'>GatsbyJS</a>
        <a href='https://algolia.com'>Algolia</a>
      </p>
    </div>
  </footer>
)

export default Footer
