import React from 'react'
import { connect } from 'react-redux'

import { fetchStates, deleteState } from '../../actions/StateActions'

import StateCard from './StateCard'

class States extends React.Component {

  componentDidMount() {
    this.props.getStates()
  }

  renderStateCards = () => {
    return this.props.states.map( state => {
      return (
        <StateCard 
          state={state}
          deleteStateAction={ e => {
            e.target.disabled = true;
            this.props.deleteState(state.id)
          }}
        />
      )
    })
  }  

  render() {
    return (
      <div>
        { this.renderStateCards() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    states: state.states
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStates: () => dispatch( fetchStates() ),
    deleteState: (id) => dispatch( deleteState(id) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(States)