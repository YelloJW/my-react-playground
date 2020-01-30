import React from 'react'
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class WeatherCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: "",
      description: "",
      temperature: null,
      icon: "",
      errorMessage: "",
    }
  }

  getWeather = () => {
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

  componentDidUpdate() {
    if (this.state.location === "") {
      this.getWeather()
    }
  }

  render(){
    return (
      <div className="weather-card">
        <h1>Todays weather in {this.state.location}</h1>
        <div className="weather-content">
          <img className="weather-image" src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt="" />
          <div className="weather-description">
            <p>{this.state.description}</p>
            <p>{this.state.temperature}°C</p>
          </div>
        </div>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default WeatherCard
