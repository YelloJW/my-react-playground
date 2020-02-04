import React from 'react'

class SearchBar extends React.Component {
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

  render() {
    return (
      <div className="search-bar">
        <h1 className="search-title">Enter location</h1>
        <form onSubmit={this.onSubmit}>
          <input className="search-input" type="text" value={this.state.location} onChange={this.onInputChange} placeholder="Timbuktu"/>
        </form>
      </div>
    )
  }
}

export default SearchBar
