import React from 'react'
import WeatherCard from './WeatherCard';
import WeatherForecast from './WeatherForecast';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lon: null,
      errorMessage: "",
    }
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
        <WeatherCard lat={this.state.lat} lon={this.state.lon}/>
        <WeatherForecast lat={this.state.lat} lon={this.state.lon}/>
      </div>
    )
  }
}

export default App
