import axios from "axios";
import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_BEARER_TOKEN_ENDPOINT
} from "./APIConfig";

export default async function RefreshAccessToken(refreshToken) {
  const response = await axios.post(
    `${STRAVA_BEARER_TOKEN_ENDPOINT}client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}&refresh_token=${refreshToken}&grant_type=refresh_token`
  );
  return response.data;
}
