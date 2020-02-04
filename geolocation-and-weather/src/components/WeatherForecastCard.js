import React from "react";

class ForecastCard extends React.Component {
  formatDay(dateTime) {
    return dateTime.getDay() % 2 === 0 ? "light-background" : "dark-background";
  }

  render() {
    const options = { weekday: "long", hour: "numeric" };
    const dateTime = new Date(this.props.dateTime * 1000);
    const dateTimeString = dateTime.toLocaleString("en-US", options);
    const { icon, temperature, description } = this.props;
    return (
      <div className="forecast-grid-card">
        <h1
          className={`forecast-grid-card-datetime ${this.formatDay(dateTime)}`}
        >
          {dateTimeString}
        </h1>
        <div className="forecast-grid-card-content">
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
            />
          </div>
          <div>
            <p>{Math.round(temperature)}°C</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastCard;
