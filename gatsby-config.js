const searchQueries = require('./src/utils/algolia')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `SMTP Field Manual`,
    description: `A collection of raw SMTP error responses from major email service providers and spam filters.`,
    author: `@postmarkapp`,
    siteUrl: `https://smtpfieldmanual.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://smtpfieldmanual.com`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SMTP Field Manual`,
        short_name: `SMTP Manual`,
        description: `A collection of raw SMTP error responses from major email service providers and spam filters.`,
        start_url: `/`,
        background_color: `#FFCC00`,
        theme_color: `#3B377B`,
        display: `standalone`,
        icon: `src/images/smtpfm-icon.png`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: searchQueries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-507677-43',
      },
    },
    `gatsby-plugin-meta-redirect`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
