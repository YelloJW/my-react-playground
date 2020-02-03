import React from 'react'

class ForecastCard extends React.Component {
  configureTime() {

  }

  render(){
    const options = { weekday: 'long', hour:'numeric'};
    const dateTime = new Date(this.props.dateTime * 1000).toLocaleString('en-US', options)
    return (
      <div className="forecast-grid-card">
        <h1 className="forecast-grid-card-datetime">{dateTime}</h1>
        <div className="forecast-grid-card-content">
          <div>
            <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="" />
          </div>
          <div>
            <p>{Math.round(this.props.temperature)}°C</p>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastCard
