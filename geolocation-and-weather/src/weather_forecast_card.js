import React from 'react'

class ForecastCard extends React.Component {
  render(){
    return (
      <div className="forecast-card">
        <h1>{this.props.timeBin}</h1>
        <div className="forecast-content">
          <div className="forecast-description">
            <p>{this.props.description}</p>
            <p>{this.props.temperature}°C</p>
          </div>
          <img className="forecast-image" src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="" />
        </div>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default ForecastCard
