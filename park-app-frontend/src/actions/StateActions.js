import { FETCH_STATES, ADD_STATES, DELETE_STATE } from './ActionList'

export const fetchStates = () => {
  return dispatch => {
    dispatch({type: FETCH_STATES})
    fetch('/states')
      .then( response => response.json() )
      .then( states => dispatch({ type: ADD_STATES, states: states }) )
  }  
}

export const deleteState = (stateID) => {
  return dispatch => {
    // send a delete request to '/states/stateID' and remove that state from redux
    fetch(`/states/${stateID}`, {
      method: "DELETE"
    })
      .then( dispatch({ type: DELETE_STATE, stateID: stateID }) )
  }
}
