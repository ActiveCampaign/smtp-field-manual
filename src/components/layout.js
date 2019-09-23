/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

const getOffsetTop = element => {
  let offsetTop = 0
  while (element) {
    offsetTop += element.offsetTop
    element = element.offsetParent
  }
  return offsetTop
}

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
  })

  window.addEventListener('DOMContentLoaded', event => {
    setTimeout(() => scrollToHash(), 200)
  })

  function scrollToHash() {
    if (window.location.hash) {
      let target = window.location.hash
      window.scrollTo({
        top: getOffsetTop(document.querySelector(target)),
        behavior: 'smooth',
      })
    }
  }
}

const Layout = ({ children, hideSearch = false, invertHeader = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        hideSearch={hideSearch}
        invertHeader={invertHeader}
      />

      <main>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
