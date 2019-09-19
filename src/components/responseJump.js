import React from 'react'

export default ({ list, identifierKey, identifierPrefix = '', labelKey }) => {
  return (
    <div className='jump'>
      <h4>Jump to ↓</h4>

      <ul className='columns-3'>
        {list.map(item => (
          <li key={item[identifierKey]}>
            <a href={`#${identifierPrefix}${item[identifierKey]}`}>
              {item[labelKey]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
