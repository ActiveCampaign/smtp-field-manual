import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contributors from '../components/contributors'

const WhyPage = () => (
  <Layout invertHeader={true} hideSearch={true}>
    <SEO
      title='Why we built this'
      description='Why we built SMTP Field Manual'
    />

    <div className='container u-push-top content'>
      <h2 className='u-center'>Why we built the SMTP Field Manual</h2>
      <div className='divider'></div>
      <p className='u-push-top'>
        We've been sending email (
        <a
          href='https://postmarkapp.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          as a provider
        </a>
        ) for nearly 16 years at{' '}
        <a href='https://wildbit.com' target='_blank' rel='noopener noreferrer'>
          Wildbit
        </a>
        . Arguably the most confusing aspects of email delivery is bounce
        management and SMTP response codes. If you're unfamiliar, ISPs (like
        Gmail, Office 365) will send SMTP responses back about the success or
        failure of the messages you send. We want to document these responses
        for several reasons:
      </p>
      <ul className='columns-diamond'>
        <li>
          SMTP response codes vary wildly across ISPs. A 550 might mean
          something different depending on who you email.
        </li>
        <li>
          SMTP response codes are constantly changing. It's extremely hard to
          keep up with it.
        </li>
        <li>
          Advice on what to do with a specific response varies. Should this be a
          hard bounce, soft bounce, block?
        </li>
        <li>
          The information that comes from SMTP codes can be very telling for
          deliverability, yet most email services bury the information.{' '}
        </li>
        <li>
          Even ISPs themselves don’t document all of these responses. A favorite
          is the{' '}
          <a href='/provider/gmail#code_550_5_7_1'>
            Gmail low reputation response
          </a>
          .{' '}
        </li>
      </ul>

      <p>
        With these reasons in mind, we wanted to create a single resource to
        document the SMTP codes that exist for the major ISPs. And even
        more important, ask for help from the industry to keep them up to date.{' '}
      </p>

      <h3 className='response-list-header u-push-top'>Who it’s for</h3>
      <p>This resource is perfect for:</p>
      <ul className='columns-diamond'>
        <li>
          Customer Support – Make sense of that bounce message so you can tell
          your customer what happened, and how to fix it.
        </li>
        <li>
          Email Server Administrators – Follow best practices to standardize
          SMTP responses across ISPs.
        </li>
        <li>
          Email Deliverability Teams – Keep up to date on changes to SMTP
          responses, what they mean, and help contribute to the resource.
        </li>
      </ul>

      <p>
        We hope this becomes a valuable resource for anyone who relies on email
        delivery. Please help us{' '}
        <a
          href='https://twitter.com/intent/tweet?url=https://smtpfieldmanual.com&text=See%20raw%20SMTP%20responses%20from%20major%20email%20providers%20and%20spam%20filter%20services.'
          target='_blank'
          rel='noopener noreferrer'
        >
          spread the word
        </a>{' '}
        to make it even more valuable.
      </p>

      <Contributors />
    </div>
  </Layout>
)

export default WhyPage
