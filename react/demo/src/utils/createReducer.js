/**
 * @param  {object} initState
 * @param  {object} handlers
 * @return {function} reducer
 */
export default function createReducer(initState, handlers) {
  return function reducer(state = initState, action) {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}
