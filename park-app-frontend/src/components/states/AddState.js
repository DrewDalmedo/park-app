import React from 'react'
import { connect } from 'react-redux'

import { addNewState } from '../../actions/StateActions'

class AddState extends React.Component {
  state = {
    stateName: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewState( this.state.stateName )
    this.setState({
      stateName: ""
    })
    console.log("submitted")
  }

  render() {
    return (
      <div>
        <p>Please enter the name of the state you wish to add:</p>
        <form
          onSubmit={this.handleSubmit}  
        >
          <input 
            type="text" 
            name="stateName"
            value={this.state.stateName}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        <p>====================</p>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewState: stateName => dispatch( addNewState(stateName) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddState);