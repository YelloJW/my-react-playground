import axios from "axios";

const STRAVA_CLIENT_ID = process.env.REACT_APP_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
const STRAVA_AUTH_ENDPOINT = `http://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,read_all,activity:read,activity:read_all`;
const STRAVA_BEARER_TOKEN_ENDPOINT = `https://www.strava.com/oauth/token?`;

export default async function authoriseApp() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const authCode = params.get("code");
  if (!authCode) {
    window.location.href = STRAVA_AUTH_ENDPOINT;
  }
  const accessToken = await getAuthToken(authCode);
  const activities = await getUserActivityData(accessToken);
  return activities;
}

async function getAuthToken(authCode) {
  const response = await axios.post(
    `${STRAVA_BEARER_TOKEN_ENDPOINT}client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}&code=${authCode}&grant_type=authorization_code`
  );
  return response.data.access_token;
}

async function getUserActivityData(accessToken) {
  const response = await axios.get(
    `https://www.strava.com/api/v3/athlete/activities?before=1580839092&after=0&page=1&per_page=50`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  return response.data;
}
