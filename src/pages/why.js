import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contributors from '../components/contributors'

const WhyPage = () => (
  <Layout invertHeader={true} hideSearch={true}>
    <SEO title='Why' description='Why we built the SMTP Field Manual' />

    <div className='container u-push-top content'>
      <h2 className='u-center'>Why we built the SMTP Field Manual</h2>
      <div className='divider'></div>
      <p className='u-push-top'>
        ISPs (like Gmail, Office 365) will send responses back about the success
        or problems for the messages you send. Even in the industry, these
        responses are both misunderstood and not well documented. To make this
        easier, we built SMTP Field Manual to:
      </p>
      <ul className='columns-diamond'>
        <li>
          Provide a single resource for both documented and undocumented SMTP
          codes from the major providers.
        </li>
        <li>
          Allow people to <Link to={'/contribute'}>contribute</Link> to changes
          in SMTP codes.
        </li>
        <li>
          Bring clarity on what actions people should take for common SMTP Codes
          (hard bounce, soft bounce, block, etc).
        </li>
        <li>
          Bring these codes to the surface. Some ESPs (We won't name names ;) )
          like to bury this information since it is telling about delivery.
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

      <Contributors />
    </div>
  </Layout>
)

export default WhyPage
