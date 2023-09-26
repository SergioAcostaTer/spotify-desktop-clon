import usePlaylist from "../hooks/usePlaylist";

export const PlaylistHomeVert = ({ id = "" }) => {
  const [playlist, loading] = usePlaylist(id);

  return (
    <div className="relative group w-full h-full">
        <a href={`/playlist/${id}`} className="w-full h-full cursor-pointer">
            <div className="p-[16px] flex flex-col gap-y-[16px] bg-[#ffffff0c] group-hover:bg-[#ffffff30] transition-all duration-300 rounded-[5px]">
                <img src={playlist?.images?.[0].url} alt={playlist?.name} className="rounded-[4px] w-full" />
            
                <div>
                    <p className="text-[#fff] text-[1rem] mt-[8px]">{loading ? "Loading..." : playlist?.name}</p>
                </div>
            </div>
        </a>
    </div>
  )
  
};
