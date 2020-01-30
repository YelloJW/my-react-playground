import React from 'react'
import ForecastCard from './weather_forecast_card'
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class WeatherCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      forecast: null
    }
  }

  getWeatherForecast = () => {
    // console.log(WEATHER_API_KEY)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.lat}&lon=${this.props.lon}&units=metric&appid=${WEATHER_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        forecast: data.list,
        // description: data.weather[0].description,
        // temperature: data.main.temp,
        // icon: data.weather[0].icon
      })
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate() {
    if (this.state.forecast === null) {
      console.log('heeelp')
      this.getWeatherForecast()
    }
  }

  render(){
    // const forecast = this.state.forecast.map(forecast => <ForecastCard timeBin={'hello'} description={'hello'} temperature={'hello'} icon={'hello'}/>)
    return (
      'hello'
    );
  }
}

export default WeatherCard
