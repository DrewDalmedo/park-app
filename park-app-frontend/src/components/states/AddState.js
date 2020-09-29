import React from 'react'

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
    // do the cool submit stuff we want here
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

export default AddState