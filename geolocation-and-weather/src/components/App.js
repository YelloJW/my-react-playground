import React from 'react'
import WeatherCard from './WeatherCard';
import WeatherForecast from './WeatherForecast';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lon: null,
      location: "",
      errorMessage: "",
    }
  }

  setLocation = (query) => {
    console.log(query)
    this.setState({
      location: query
    })
  }

  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    )
  }

  componentDidMount() {
    this.getCoordinates()
  }

  render() {
    return (
      <div>
        <div className="top-container">
          <WeatherCard lat={this.state.lat} lon={this.state.lon} location={this.state.location}/>
          <SearchBar setLocation={this.setLocation}/>
        </div>
        <WeatherForecast lat={this.state.lat} lon={this.state.lon} location={this.state.location}/>
      </div>
    )
  }
}

export default App
