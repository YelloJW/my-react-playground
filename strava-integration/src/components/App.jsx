import React from "react";
import AuthoriseApp from "../api/AuthoriseApp";
import Header from "./Header";
import ActivityList from "./ActivityList";
import SelectedActivity from "./SelectedActivity";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      selectedActivityId: null,
      accessToken: "",
      refreshToken: "",
      user: {}
    };
  }

  selectActivity = id => {
    this.setState({
      selectedActivityId: id
    });
  };

  async sessionAuthorization() {
    if (
      sessionStorage.getItem("accessData") &&
      sessionStorage.getItem("activities")
    ) {
      return {
        accessData: JSON.parse(sessionStorage.getItem("accessData")),
        activities: JSON.parse(sessionStorage.getItem("activities"))
      };
    } else {
      return await AuthoriseApp();
    }
  }

  async componentDidMount() {
    const authResponse = await this.sessionAuthorization();
    const { activities, accessData } = authResponse;
    const { athlete } = accessData;
    const { firstname, lastname, profile } = athlete;
    this.setState({
      activities: activities,
      selectedActivityId: activities[0].id,
      accessToken: accessData.access_token,
      refreshToken: accessData.refresh_token,
      user: { firstname: firstname, lastname: lastname, picture: profile }
    });
  }

  render() {
    return (
      <div className="app">
        <Header user={this.state.user} />
        <div>
          <ActivityList
            activities={this.state.activities}
            selectActivity={this.selectActivity}
            selectedActivityId={this.state.selectedActivityId}
          />
          <SelectedActivity
            id={this.state.selectedActivityId}
            accessToken={this.state.accessToken}
          />
        </div>
      </div>
    );
  }
}

export default App;
