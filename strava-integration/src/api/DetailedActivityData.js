import axios from "axios";

export default async function DetailedActivityData(id, accessToken) {
  const response = await axios.get(
    `https://www.strava.com/api/v3/activities/${id}?include_all_efforts=true`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  return response.data;
}
