import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Heart } from 'styled-icons/typicons/Heart'

const ContributePage = () => (
  <Layout invertHeader={true} hideSearch={true}>
    <SEO
      title='Contribute'
      description='Contribute to the SMTP Field Manual.'
    />

    <div className='container u-push-top content'>
      <h2 className='u-center'>Contribute to the SMTP Field Manual</h2>
      <div className='divider'></div>
      <p className='u-push-top'>
        The SMTP Field Manual was built and maintained by the team at{' '}
        <a
          href='https://postmarkapp.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Postmark
        </a>
        , but we also accept contributions from the community. Here are the
        types of contributions we accept:
      </p>

      <ul className='columns-diamond'>
        <li>
          New SMTP responses from an email service provider or spam filter
        </li>
        <li>
          Edits to an existing SMTP response. This could be as simple as fixing
          a typo or rewording copy for clarity.
        </li>
        <li>
          Key information about SMTP codes, email service providers, or spam
          filters
        </li>
        <li>
          Any kind of feedback. This could be an interest in seeing more
          information pertaining to a specific SMTP code or reorganizing content
          so it’s easier to find.
        </li>
      </ul>

      <h3 className='response-list-header u-push-top'>
        A few things to remember
      </h3>
      <p>Keep these things in mind when adding new responses:</p>
      <ul className='columns-diamond'>
        <li>
          Rename personal information such as email addresses, names, etc. e.g.
          bobross13377331@example.com &rarr; email@example.com
        </li>
        <li>Remove unique mail server names or identifiers</li>
        <li>
          Keep it specific to major email service providers (e.g. Gmail,
          Outlook, etc.) and spam filters (e.g. Office 365, Symantec, etc.).
        </li>
      </ul>

      <h3 className='response-list-header u-push-top'>
        Contributing via Github
      </h3>

      <h4>Create a pull request</h4>
      <p>
        If you’re comfortable with code, we accept pull requests via{' '}
        <a
          href='https://github.com/wildbit/smtp-field-manual'
          target='_blank'
          rel='noreferrer noopener'
        >
          Github
        </a>
        . All of the SMTP response data is stored as JSON inside of the{' '}
        <a
          href='https://github.com/wildbit/smtp-field-manual/tree/master/data'
          target='_blank'
          rel='noopener noreferrer'
        >
          /data
        </a>{' '}
        folder on our{' '}
        <a
          href='https://github.com/wildbit/smtp-field-manual'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github repository
        </a>
        .
      </p>
      <p>
        Once your pull request is submitted, one of our authors will get back to
        you. We’ll take care of merging and deploying your changes if everything
        looks good.
      </p>

      <p>
        Check out{' '}
        <a
          href='https://help.github.com/en/articles/creating-a-pull-request'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github’s guide
        </a>{' '}
        on creating a pull request for more info.
      </p>

      <h4>File an issue</h4>
      <p>
        You can also{' '}
        <a
          href='https://github.com/wildbit/smtp-field-manual/issues'
          target='_blank'
          rel='noopener noreferrer'
        >
          file an issue on Github
        </a>
        . This is helpful if you would like to provide more general feedback or
        if Github pull requests aren't your thing. If your feedback or change
        revolves around a specific page, be sure to include a link to the page.
      </p>
      <p>
        <a
          href='https://github.com/wildbit/smtp-field-manual/issues/new'
          target='_blank'
          rel='noopener noreferrer'
        >
          File an issue &rarr;
        </a>
      </p>

      <h3 className='response-list-header'>
        We <Heart size='22px' /> email
      </h3>
      <p>
        Thanks for your interest in contributing.{' '}
        <a
          href='https://github.com/wildbit/smtp-field-manual/issues/new'
          target='_blank'
          rel='noopener noreferrer'
        >
          File a Github issue
        </a>{' '}
        if you have any questions.
      </p>
    </div>
  </Layout>
)

export default ContributePage
