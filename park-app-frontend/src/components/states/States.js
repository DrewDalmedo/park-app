import React from 'react'
import { connect } from 'react-redux'

import { fetchStates } from '../../actions/StateActions'

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
    getStates: () => dispatch( fetchStates() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(States)