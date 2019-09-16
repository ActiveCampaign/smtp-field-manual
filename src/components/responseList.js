import React from 'react'

export default ({
  list,
  titleLabelKey,
  titleKey,
  titleSlugPrefix,
  identifierPrefix = '',
}) => {
  return (
    <>
      {list.map(item => (
        <List
          key={item[titleKey]}
          identifierPrefix={identifierPrefix}
          identifier={item[titleKey]}
          label={item[titleLabelKey]}
          titleSlugPrefix={titleSlugPrefix}
        >
          {item.responses.map(response => (
            <Response
              key={response.status}
              data={response}
              code={item[titleKey]}
              identifierPrefix={identifierPrefix}
            />
          ))}
        </List>
      ))}
    </>
  )
}

const List = ({
  children,
  identifier,
  identifierPrefix,
  label,
  titleSlugPrefix,
}) => {
  const fullIdentifier = `${identifierPrefix}${identifier}`
  const titleHref = `#${fullIdentifier}`
  const titleSlug = `${titleSlugPrefix}/${identifier}`

  return (
    <section className='response-list'>
      <h3 className='response-list_name' id={fullIdentifier}>
        <a href={titleHref}>#</a> <a href={titleSlug}>{label}</a>
      </h3>
      <div className='response-list_items'>{children}</div>
      <a href='#top' className='response-list_top'>
        ↑ Back to top
      </a>
    </section>
  )
}

const Response = ({ data, code, identifierPrefix }) => {
  const { status, response } = data
  const identifer = `${identifierPrefix}${code}_${status.replace(/\./g, '_')}`
  const identifierHref = `#${identifer}`

  return (
    <div id={identifer} className='response-list_item'>
      <a href={identifierHref} className='response-list_item-anchor'>
        <span>#</span>
      </a>
      <p className='response-label'>{response}</p>
    </div>
  )
}
