import axios from "axios";

export default async function UserActivityData(accessToken) {
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
