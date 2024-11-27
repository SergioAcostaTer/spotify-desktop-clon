import { spotifyApi } from "../lib/axiosInstance";

async function getPlaylistDetail(id: string) {
  const albumTracks = await spotifyApi.get(
    `/playlists/${id}?limit=100&offset=0`
  );

  while (albumTracks.data.tracks.next) {
    const nextTracks = await spotifyApi.get(albumTracks.data.tracks.next);
    albumTracks.data.tracks.items = albumTracks.data.tracks.items.concat(
      nextTracks.data.items
    );
    albumTracks.data.tracks.next = nextTracks.data.next;
  }

  return albumTracks.data;
}

export { getPlaylistDetail };
