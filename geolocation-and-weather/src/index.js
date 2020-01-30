import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from './weather_card'
import WeatherForecast from './weather_forecast'

import './index.css'

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

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
