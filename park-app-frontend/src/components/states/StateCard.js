import React from 'react'

class StateCard extends React.Component {

  renderStateParks = (parks) => {
    return parks.map( park => {
      return(
        <li>{park.name}</li>
      )
    })
    
  }

  render() {
    const parks = this.props.state.parks
    return (
      <div>
        { this.props.state.name }
        <br />
        <button onClick={this.props.deleteStateAction}>Delete State</button>
        <ul>
          { this.renderStateParks( parks ) }
        </ul>
        <p>====================</p>
      </div>
    )
  }
}

export default StateCard