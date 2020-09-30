import { FETCH_STATES, ADD_STATES } from './ActionList'

export const fetchStates = () => {
  return dispatch => {
    dispatch({type: FETCH_STATES})
    fetch('/states')
      .then( response => response.json() )
      .then( states => dispatch({ type: ADD_STATES, states: states }) )
  }  
}

