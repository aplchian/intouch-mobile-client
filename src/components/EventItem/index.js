import React from 'react'
import { path } from 'ramda'

const Endtime = ({ event }) => {
  const endString = path(['time', 'endString'], event)
  return (
    <span className="ml1">
      -<span className="ml1">{endString}</span>
    </span>
  )
}

const Duration = ({ event }) => {
  const { hoursDiff = '0', minutesDiff = '0' } = event
  const minutesDiffText = minutesDiff === null ? '0' : minutesDiff
  const endString = path(['time', 'endString'], event)
  return (
    <span className="f6 gray">
      ({hoursDiff > 0
        ? `${hoursDiff}h ${minutesDiffText}m`
        : `${minutesDiffText}m`})
    </span>
  )
}

const EventItem = ({ event }) => {
  const hasEndTime = path(['time', 'hasEndTime'], event)

  return (
    <React.Fragment>
      <span className="f5">
        {event.name}
        {'    '}
        {hasEndTime && <Duration event={event} />}{' '}
      </span>
      <span className="f6 gray right">
        {event.time.string} {hasEndTime && <Endtime event={event} />}
      </span>
    </React.Fragment>
  )
}

export default EventItem
