import React from 'react'
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class WeatherCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: this.props.location,
      description: "",
      temperature: null,
      icon: "",
      errorMessage: "",
    }
  }

  getWeatherByCoords() {
    // console.log('getting weather by coordinates')
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&units=metric&appid=${WEATHER_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        location: data.name,
        description: data.weather[0].description,
        temperature: data.main.temp,
        icon: data.weather[0].icon
      })
    })
    .catch(err => console.log(err))
  }

  getWeatherByLocation() {
    // console.log('getting weather by search location')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.location}&units=metric&appid=${WEATHER_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        location: data.name,
        description: data.weather[0].description,
        temperature: data.main.temp,
        icon: data.weather[0].icon
      })
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.lat !== null && this.props.location === "") {
        this.getWeatherByCoords()
      }
      if (this.props.location !== "" && this.props.location !== prevProps.location) {
        this.getWeatherByLocation()
      }
    }
  }

  render(){
    return (
      <div className="weather-card">
        <h1 className="weather-card-title">Todays weather in {this.state.location}</h1>
        <div className="weather-card-content">
          <img className="weather-card-content-image" src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt="" />
          <div className="weather-card-content-description">
            <p>{this.state.description}</p>
            <p>{Math.round(this.state.temperature)}°C</p>
          </div>
        </div>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default WeatherCard
