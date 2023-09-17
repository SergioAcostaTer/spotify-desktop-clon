import axios from "axios";
import { getToken } from "./token";

async function getPlaylistDetail(id: string) {
  const spotifyToken = await getToken();

  const albumTracks = await axios.get(
    `https://api.spotify.com/v1/playlists/${id}?limit=100&offset=0`,
    {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    }
  );

  while (albumTracks.data.tracks.next) {
    const nextTracks = await axios.get(albumTracks.data.tracks.next, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    albumTracks.data.tracks.items = albumTracks.data.tracks.items.concat(
      nextTracks.data.items
    );
    albumTracks.data.tracks.next = nextTracks.data.next;
  }

  return albumTracks.data;
}

export { getPlaylistDetail };
