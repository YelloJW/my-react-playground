import React from 'react'
import ForecastCard from './WeatherForecastCard'
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class WeatherCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location:this.props.location,
      forecast: null
    }
  }

  configForecast() {
    if (this.state.forecast) {
      const forecast = this.state.forecast.map(forecast => <ForecastCard key={forecast.dt} dateTime={forecast.dt} description={forecast.weather[0].description} temperature={forecast.main.temp} icon={forecast.weather[0].icon}/>)
      return forecast
    } else {
      return null
    }
  }

  getWeatherForecastByCoords = () => {
    console.log('getting forecast by coordinates')
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.lat}&lon=${this.props.lon}&units=metric&appid=${WEATHER_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        forecast: data.list,
      })
    })
    .catch(err => console.log(err))
  }

    getWeatherForecastByLocation = () => {
    console.log('getting forecast by search location')
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.location}&units=metric&appid=${WEATHER_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        forecast: data.list,
      })
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps) {
    if (this.props.lat !== null && this.state.forecast === null && this.props.location === "") {
      this.getWeatherForecastByCoords()
    }
    if (this.props.location !== prevProps.location) {
      this.getWeatherForecastByLocation()
    }
  }

  render(){
    const forecast = this.configForecast()
    return (
      <div className="forecast-grid">
        {forecast}
      </div>
    );
  }
}

export default WeatherCard
