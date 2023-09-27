import { useState } from "react";
import usePlaylist from "../hooks/usePlaylist";

export const PlaylistHomeVert = ({ id = "" }) => {
  const [playlist, loading] = usePlaylist(id);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative group w-full h-full">
      <a href={`/playlist/${id}`} className="w-full h-full cursor-pointer">
        <div className="p-[16px] flex flex-col gap-y-[8px] bg-[#ffffff05] group-hover:bg-[#ffffff18] transition-all duration-300 rounded-[5px]">
          <img
            src={playlist?.images?.[0].url}
            alt={playlist?.name}
            className="rounded-[4px] w-full"
          />

          <div>
            <p className="text-[#fff] text-[1rem] mt-[8px] truncate">
              {loading ? "Loading..." : playlist?.name}
            </p>


            <p className="text-[#fff] text-[14px] mt-[4px]">
              {loading ? "Loading..." : playlist?.owner?.display_name}
            </p>

          </div>
        </div>
      </a>
      <button 
      className={`absolute w-[48px] h-[48px] rounded-full bg-green-500 bottom-[85px] right-[23px] opacity-0 group-hover:opacity-100 ${playing && "opacity-100"} transition-opacity duration-300 flex justify-center items-center hover:scale-105`} 
      onClick={() => setPlaying(!playing)}>
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
