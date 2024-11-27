import { useState } from "react";
import usePlaylist from "../hooks/usePlaylist";

export const PlaylistHomeHori = ({ id = "" }) => {
  const [playlist, loading] = usePlaylist(id);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative group">
      <a href={`/playlist/${id}`}>
        <div className="flex xl:h-[80px] h-[64px] rounded-[4px] bg-[#ffffff20] group-hover:bg-[#ffffff50] transition-all duration-300">
          <div className="h-full relative">
            <img
              src={playlist?.images?.[0].url}
              alt={playlist?.name}
              className="h-full rounded-l-[4px] absolute bottom-0 left-0 z-[50]"
            />
            <div className="h-full aspect-square bg-gray-500 rounded-[4px] animate-pulse" />
          </div>

          <div className="flex-1 flex flex-col justify-center px-[16px] max-w-[calc(100%-140px)]">
            <p className="text-[#fff] text-[1rem]">
              {loading ? "Loading..." : playlist?.name}
            </p>
          </div>
        </div>
      </a>
      <button
        className={`absolute top-0 w-[48px] h-[48px] rounded-full bg-green-500 bottom-0 m-auto right-4 opacity-0 group-hover:opacity-100 ${
          playing && "opacity-100"
        } transition-opacity duration-300 flex justify-center items-center hover:scale-105`}
        onClick={() => setPlaying(!playing)}
      >
        {playing ? (
          <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
          >
            <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
          </svg>
        ) : (
          <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
          >
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};
