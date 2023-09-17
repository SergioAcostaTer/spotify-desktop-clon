import axios from "axios";

async function getToken() {
  const clientId = "fd6bc481d430442c8011a48589db01a1";
  const clientSecret = "386d6f3cf16b4c538a909319a8d58034";
  const authString = `${clientId}:${clientSecret}`;
  const base64Auth = btoa(authString);

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${base64Auth}`, // Use base64Auth here
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const spotifyToken = response.data.access_token;

  return spotifyToken;
}

export { getToken };
