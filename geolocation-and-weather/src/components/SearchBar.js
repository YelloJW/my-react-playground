import React from 'react'

class LocationSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: ""
    }
  }

  onInputChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.setLocation(this.state.location)
  }

  onClick = () => {
    this.props.setLocation("")
    this.setState({
      location: ""
    })
  }

  render() {
    return (
      <div className="location-settings">
        <h1 className="search-title">Enter location</h1>
        <form onSubmit={this.onSubmit}>
          <input className="search-input" type="text" value={this.state.location} onChange={this.onInputChange} placeholder="Timbuktu"/>
        </form>
        <button className="current-location-btn" onClick={this.onClick}>Current location</button>
      </div>
    )
  }
}

export default LocationSettings
