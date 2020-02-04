import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clientId: 43305,
      clientSecret: 'a7a9536fb9a5d3b4edf9318745c8beb1b6017fcd',
      code: "",
      activities: []
    }
  }

  getActivityData(accessToken) {
    fetch(`https://www.strava.com/api/v3/athlete/activities?before=1580839092&after=0&page=1&per_page=50`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
        }
      }
    )
    .then(res => res.json())
    .then(res => {
      this.setState({
        activities: res
      })
    })
  }

  getAuthToken(code) {
    console.log('Fetching Auth Token with code' + code)
    fetch(`https://www.strava.com/oauth/token?client_id=${this.state.clientId}&client_secret=${this.state.clientSecret}&code=${code}&grant_type=authorization_code`,
    {
      method: 'POST'
      }
    )
    .then(res => res.json())
    .then(res => {
      const accessToken = res.access_token
      console.log('Bearer '+ accessToken)
      this.getActivityData(accessToken)
      }
    )
    .catch(err => console.log(err))
  }

  componentDidMount() {
    const search = window.location.search
    const params = new URLSearchParams(search);
    const code = params.get('code')
    if (!code) {
      window.location.href = `http://www.strava.com/oauth/authorize?client_id=${this.state.clientId}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,read_all,activity:read,activity:read_all`;
    }
    this.setState({
      code: code
    })
    this.getAuthToken(code)
  }
  render() {
    return(
    <div>Hello Strava</div>
    )
  }
}

export default App


