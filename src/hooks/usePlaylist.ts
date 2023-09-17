import { useEffect, useState } from "react";
import { getPlaylistDetail } from "../services/playlist";
import { Playlist, Track } from "../types";

const usePlaylist = (id: string): [Playlist | undefined, boolean, string] => {
  const [data, setData] = useState<Playlist>();
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getPlaylistDetail(id).then((res) => {
      setData(res);
      const duration = res?.tracks?.items.reduce(
        (acc: number, cur: { track: Track }) => acc + cur.track.duration_ms,
        0
      );

      console.log(duration / 3600000);
      const hours = Math.floor(duration / 3600000);
      const minutes = Math.floor((duration % 3600000) / 60000);
      const seconds = Math.floor(((duration % 3600000) % 60000) / 1000);

      setDuration(
        `${
          hours > 0
            ? `${hours} h ${minutes} min`
            : `${minutes} min ${seconds} s`
        } `
      );

      setLoading(false);
    });
  }, [id]);

  return [data, loading, duration];
};

export default usePlaylist;
