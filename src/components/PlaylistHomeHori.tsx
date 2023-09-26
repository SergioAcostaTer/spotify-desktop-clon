import usePlaylist from "../hooks/usePlaylist";

export const PlaylistHomeHori = ({ id = "" }) => {
  const [playlist, loading] = usePlaylist(id);

  return (
    <div className="relative group">
     <a href={`/playlist/${id}`}>
         <div className="flex xl:h-[80px] h-[64px] rounded-[4px] bg-[#ffffff20] group-hover:bg-[#ffffff50] transition-all duration-300">
           <div className="h-full">
             <img
               src={playlist?.images?.[0].url}
               alt={playlist?.name}
               className="h-full rounded-l-[4px]"
             />
           </div>
        
           <div className="flex-1 flex flex-col justify-center px-[16px] max-w-[calc(100%-140px)]">
             <p className="text-[#fff] text-[1rem]">
                {loading ? "Loading..." : playlist?.name}</p>
           </div>
         </div>
     </a>
      <button className="absolute top-0 w-[48px] h-[48px] rounded-full bg-green-500 bottom-0 m-auto right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-encore-id="icon"
          fill="#fff"
        >
          <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
        </svg>
        
      </button>
    </div>
  );
};
