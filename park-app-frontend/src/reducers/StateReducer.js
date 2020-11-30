import { 
  FETCH_STATES, 
  ADD_STATES, 
  ADD_STATE, 
  DELETE_STATE, 
} from '../actions/ActionList' 

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
    case ADD_STATE:
      return {
        ...state,
        states: [...state.states, action.state],
        requesting: false
      }
    case DELETE_STATE:
      return {
        ...state,
        states: state.states.filter( state => state.id !== action.stateID ),
        requesting: false
      }
    default:
      return state
  }
}

export default stateReducer