import { spotifyApi } from "../lib/axiosInstance";

async function getUser(id: string) {
  const user = await spotifyApi.get(`/users/${id}`);

  return user.data;
}

export { getUser };
