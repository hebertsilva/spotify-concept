import { merge } from 'ramda'

export function handleActions(actions, handler) {
  const handlers = actions.reduce(
    (current, value) => merge(current, { [value]: handler }),
    {}
  )

  return handlers
}
