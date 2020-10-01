import { FETCH_STATES, ADD_STATES, DELETE_STATE, ADD_STATE } from './ActionList'

export const fetchStates = () => {
  return dispatch => {
    dispatch({type: FETCH_STATES})
    fetch('/states')
      .then( response => response.json() )
      .then( states => dispatch({ type: ADD_STATES, states: states }) )
  }  
}

export const addNewState = (stateName) => {
  return dispatch => {
    fetch('/states', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: stateName
      })
    })
      .then( response => response.json() )
      .then( state => dispatch({ type: ADD_STATE, state: state }) )
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
