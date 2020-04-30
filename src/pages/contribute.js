import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contributors from '../components/contributors'

const ContributePage = () => (
  <Layout invertHeader={true} hideSearch={true}>
    <SEO
      title='Contribute'
      description='Contribute to the SMTP Field Manual.'
    />

    <div className='container u-push-top content'>
      <h1 className='u-center'>Contribute to the SMTP Field Manual</h1>
      <div className='divider'></div>
      <p className='u-push-top'>
        So you’re interested in contributing to the SMTP Field Manual, eh?
        You’re awesome! Here are the types of contributions we accept:
      </p>

      <ul className='columns-diamond'>
        <li>
          New SMTP responses from email service providers or spam filter
          services
        </li>
        <li>
          Edits to existing SMTP responses. This could be as simple as fixing a
          typo or rewording copy for clarity.
        </li>
        <li>
          Key information about SMTP codes, email service providers, or spam
          filters
        </li>
        <li>
          Any kind of suggestion. This could be an interest in seeing more
          information pertaining to a specific SMTP code or reorganizing content
          so it’s easier to find.
        </li>
      </ul>

      <h2 className='response-list-header u-push-top'>
        A few things to remember
      </h2>
      <p>Keep this in mind when adding new responses:</p>
      <ul className='columns-diamond'>
        <li>
          Don’t include personal information like emails or names in the
          response. Rename them to something generic.
          <br />
          <br />
          👎bobross1337@example.com
          <br />
          👍email@example.com
        </li>
        <li>
          Don’t include unique mail server names or identifiers. If possible,
          rename them to the root domain.
          <br />
          <br />
          👎PX5345.MAGIC.MAIL.EXAMPLE.COM
          <br />
          👍EXAMPLE.COM
        </li>
        <li>
          Keep the responses specific to major email service providers (e.g.
          Gmail, Outlook, etc.) and spam filters services (e.g. Office 365,
          Symantec, etc.).
        </li>
      </ul>

      <h2 className='response-list-header u-push-top'>
        Contributing via Github
      </h2>

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
        Once your pull request is submitted, one of our maintainers will get
        back to you. We’ll take care of merging and deploying your changes if
        everything looks good.
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
        if Github pull requests aren't your thing. Be sure to include a link to
        the page if your feedback or change revolves around a specific page.
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

      <p>
        Thank you for your interest in contributing.{' '}
        <a
          href='https://github.com/wildbit/smtp-field-manual/issues/new'
          target='_blank'
          rel='noopener noreferrer'
        >
          File a Github issue
        </a>{' '}
        if you have any questions.
      </p>

      <Contributors />
    </div>
  </Layout>
)

export default ContributePage
