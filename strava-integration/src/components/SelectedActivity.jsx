import React from "react";
import DetailedActivityData from "../api/DetailedActivityData";

class SelectedActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {}
    };
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const activityData = await DetailedActivityData(
        this.props.id,
        this.props.accessToken
      );
      this.setState({
        activity: activityData
      });
    }
  }

  render() {
    return (
      <div className="selected-activity">
        <div className="selected-activity-title">
          <h3>{this.state.activity.type} </h3>
          <h3>{this.state.activity.name} </h3>
        </div>
        <div className="selected-activity-summary-stats">
          Distance: <h4>{this.state.activity.distance} </h4>
          Duration: <h4>{this.state.activity.moving_time} </h4>
          Avg. Speed: <h4>{this.state.activity.average_speed} </h4>
        </div>
      </div>
    );
  }
}
export default SelectedActivity;
