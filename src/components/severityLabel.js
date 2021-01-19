import React from 'react'
import cn from 'classnames'

const labelMap = {
  1: 'Low',
  2: 'Medium',
  3: 'High',
  4: 'Critical'
}

export default ({ranking}) => {
  if (!ranking) return <p></p>
  const severityLabel = labelMap[ranking]
  const rootClass = cn('severity', `severity--${severityLabel.toLowerCase()}`)

  return (
    <p className={rootClass}>
      {severityLabel} severity
    </p>
  )

}
