import axios from "axios";
import { getToken } from "./token";

async function getUser(id: string) {
  const spotifyToken = await getToken();

  const user = await axios.get(`https://api.spotify.com/v1/users/${id}`, {
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
  });

  return user.data;
}

export { getUser };
