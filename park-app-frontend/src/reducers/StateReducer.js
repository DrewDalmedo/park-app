import { FETCH_STATES, ADD_STATES } from '../actions/ActionList' 
function stateReducer(
  state = {
    states: [],
    requesting: false
  },
  action
) {
  switch(action.type) {
    case FETCH_STATES:
      return {
        ...state,
        states: [],
        requesting: true
      }
    case ADD_STATES:
      return {
        ...state,
        states: action.states,
        requesting: false
      }
    default:
      return state
  }
}

export default stateReducer