import axios from "axios";
import UserActivityData from "./UserActivityData";
import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_AUTH_ENDPOINT,
  STRAVA_BEARER_TOKEN_ENDPOINT
} from "./APIConfig";

export default async function authoriseApp() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const authCode = params.get("code");
  if (!authCode) {
    window.location.href = STRAVA_AUTH_ENDPOINT;
  }
  const accessData = await RequestBearerToken(authCode);
  const activities = await UserActivityData(accessData.access_token);
  window.sessionStorage.setItem("accessData", JSON.stringify(accessData));
  window.sessionStorage.setItem("activities", JSON.stringify(activities));
  return { accessData: accessData, activities: activities };
}

async function RequestBearerToken(authCode) {
  const response = await axios.post(
    `${STRAVA_BEARER_TOKEN_ENDPOINT}client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}&code=${authCode}&grant_type=authorization_code`
  );
  return response.data;
}
