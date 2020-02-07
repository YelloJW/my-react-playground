const STRAVA_CLIENT_ID = process.env.REACT_APP_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
const STRAVA_AUTH_ENDPOINT = `http://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,read_all,activity:read,activity:read_all`;
const STRAVA_BEARER_TOKEN_ENDPOINT = `https://www.strava.com/oauth/token?`;

export {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_AUTH_ENDPOINT,
  STRAVA_BEARER_TOKEN_ENDPOINT
};
