import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from './WeatherCard'

class App extends React.Component {
  render() {
    return (
      <WeatherCard/>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
