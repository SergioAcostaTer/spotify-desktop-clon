import { Link, useLocation } from "react-router-dom";
import usePlaylist from "../hooks/usePlaylist";
import { Playlist } from "../types";

export default function Playlist({ id = "" }) {
  const { pathname: path } = useLocation();
  const [playlist] = usePlaylist(id);

  return (
    <Link to={`/playlist/${id}`}>
      <div
        className={`flex items-center h-[64px] p-[8px] gap-[8px] rounded-[4px] cursor-pointer ${
          path === `/playlist/${id}`
            ? "hover:bg-[#444444]"
            : "hover:bg-[#232323]"
        }`}
        style={{ backgroundColor: path === `/playlist/${id}` ? "#323232" : "" }}
      >
        <img
          className="w-[48px] h-[48px] rounded-[4px]"
          src={playlist?.images?.[0].url}
          alt={playlist?.name}
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#fff] text-[1rem]">{playlist?.name}</p>
          <p className="text-[#a7a7a7] text-[0.875rem]">
            List • {playlist?.owner?.display_name}
          </p>
        </div>
      </div>
    </Link>
  );
}
