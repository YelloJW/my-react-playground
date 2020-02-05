import React from 'react';
import authoriseApp from '../api/StravaAuth'
import Dashboard from './Dashboard'
import ActivityList from './ActivityList'
import SelectedActivity from './SelectedActivity'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dashboardStats: [],
      activities: [],
      selectedActivityId: null
    }
  }

  selectActivity({id}) {
    this.setState({
      selectedActivityId: id
    })
  }

  configActivities() {
    this.state.activities.map((
      { type, name, distance, elapsed_time, total_elevation_gain, id, start_date, start_latlng, achievement_count, kudos_count, average_speed }
    ) => {
      return(
        <Activity
          key={id}
          startDate={start_date}
          type={type}
          name={name}
          distance={distance}
          elapsedTime={elapsed_time}
          averageSpeed={average_speed}
          totalElevationGain={total_elevation_gain}
          achievementCount={achievement_count}
          kudosCount={kudos_count}
        >
      )
    })
  }

  async componentDidMount() {
    const activities = await authoriseApp()
    this.setState({
      activities: activities
      selectedActivity: activities[0].id
    })
  }

  render() {
    const activities = configActivities()
    return(
    <div>Hello Strava
      <Dashboard />
      <ActivityList activities={this.props.activities} selectActivity={this.selectActivity}/>
      <SelectedActivity selectedActivityId={this.props.selectedActivityId}/>
    </div>
    )
  }
}

export default App


