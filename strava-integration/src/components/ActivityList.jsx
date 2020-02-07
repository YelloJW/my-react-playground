import React from "react";
import Activity from "./Activity";

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      selectedActivityId: null
    };
  }

  configActivities(activities) {
    return activities.map(
      ({
        type,
        name,
        distance,
        elapsed_time,
        total_elevation_gain,
        id,
        start_date,
        start_latlng,
        achievement_count,
        kudos_count,
        average_speed
      }) => {
        return (
          <Activity
            selectActivity={this.props.selectActivity}
            selectedActivityId={this.props.selectedActivityId}
            key={id}
            id={id}
            startDate={start_date}
            type={type}
            name={name}
            distance={distance}
            elapsedTime={elapsed_time}
            averageSpeed={average_speed}
            totalElevationGain={total_elevation_gain}
          />
        );
      }
    );
  }

  componentDidMount() {
    this.setState({
      activities: this.props.activities,
      selectActivity: this.props.selectActivity,
      selectedActivityId: this.props.selectedActivityId
    });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const activities = await this.configActivities(this.props.activities);
      this.setState({
        activities: activities,
        selectedActivityId: this.props.selectedActivityId
      });
    }
  }

  render() {
    return (
      <div className="activity-list">
        <table>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Name</th>
            <th>Distance</th>
            <th>Duration</th>
            <th>Avg. Speed</th>
            <th>Elevation Gain</th>
          </tr>
          {this.state.activities}
        </table>
      </div>
    );
  }
}

export default ActivityList;
