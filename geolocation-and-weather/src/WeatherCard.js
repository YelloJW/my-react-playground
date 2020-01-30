import React from 'react'
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class WeatherCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lon: null,
      errorMessage: "",
      location: "",
      description: "",
      temperature: null,
      icon: ""
    }
  }

  getWeather = () => {
    // console.log(WEATHER_API_KEY)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${WEATHER_API_KEY}`)
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

  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        this.getWeather()
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

  render(){
    return (
      <div>
        <h1>Todays weather in {this.state.location}</h1>
        <p>{this.state.lat}</p>
        <p>{this.state.lon}</p>
        <p>{this.state.description}</p>
        <p>{this.state.temperature}</p>
        <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt="" />
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default WeatherCard
