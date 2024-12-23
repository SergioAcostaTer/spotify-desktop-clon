import PageHeader from "../components/PageHeader";
import { useParams } from "react-router-dom";
import Song from "../components/Songs";
import usePlaylist from "../hooks/usePlaylist";
import useUser from "../hooks/useUser";
import useOpacity from "../hooks/useOpacity";

export default function Playlist() {
  const { id } = useParams();
  const [playlist, loading, duration] = usePlaylist(id as string);
  const [user, loadingUser] = useUser(playlist?.owner?.id as string);
  const { opacityHex, opacity, handleScroll, scrolled } = useOpacity();

  return (
    <div className="h-full w-full relative">
      <PageHeader
        opacity={opacity}
        title={loading ? "Loading..." : playlist?.name}
        opacityHex={opacityHex}
      />

      <div
        className="h-full w-full relative overflow-y-auto invisible_scrollbar translate-y-[-64px] rounded-t-[9px]"
        onScroll={handleScroll}
      >
        <div className="h-[340px] w-full flex flex-col px-[20px] relative bg-gradient-to-b from-[#555555] to-[#222222] rounded-t-[9px]">
          <div className="flex items-end flex-1 w-full pb-[20px]">
            <div className="flex items-center justify-start h-[192px] xl:h-[232px] w-full gap-[16px]">
              <div className="h-full rounded-[1px] aspect-square relative">
                <img
                  className="h-full rounded-[1px] w-full absolute top-0 left-0 z-[50]"
                  src={playlist?.images?.[0].url}
                  alt={playlist?.name}
                />

                <div className="w-full h-full bg-gray-500 animate-pulse" />
              </div>

              <div className="flex-1 flex flex-col justify-center h-full">
                <p>Lista</p>
                <p className="text-[#fff] mt-[16px] flex-1 text-[2rem] lg:text-[3rem] xl:text-[5rem] font-bold">
                  {loading ? "Loading..." : playlist?.name}
                </p>

                <div className="flex items-center gap-[8px] mt-[16px]">
                  <div className="w-[24px] h-[24px] rounded-full relative">
                    <img
                      alt={playlist?.owner?.display_name}
                      src={user?.images?.[0].url}
                      className="w-full h-full rounded-full absolute top-0 left-0 z-[50]"
                    />
                    <div className="w-full h-full bg-gray-500 animate-pulse rounded-full" />
                  </div>
                  <p>
                    {loading ? "Loading..." : playlist?.owner?.display_name}{" "}
                    {!loading ? playlist?.tracks?.items.length : "0"} songs,{" "}
                    <span>{!loading ? duration : "0 h 0 min"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[56px] h-[56px] flex p-[17px] box-content">
          <button>
            <span className="rounded-full w-[56px] h-[56px] bg-[#1ED760] flex items-center justify-center">
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
            </span>
          </button>
        </div>

        <div
          className="grid lg:grid-cols-[16px,6fr,4fr,3fr,minmax(120px,_1fr),16px] grid-cols-[16px,6fr,4fr,3fr] sticky top-[63px] px-[36px] gap-[16px] h-[36px] flex items-center relative transition-all duration-100 border-0"
          style={{ backgroundColor: scrolled > 362 ? "#1a1a1a" : "" }}
        >
          <div
            className="h-full border-b-[1px] border-[#282828] absolute top-0 left-0 w-[95%] right-0 mx-auto"
            style={{ borderBottom: scrolled > 362 ? 0 : "1px solid #282828" }}
          ></div>
          <span className="text-[#b3b3b3]">#</span>
          <span className="text-[#b3b3b3]">Title</span>
          <span className="text-[#b3b3b3]">Album</span>
          <span className="text-[#b3b3b3] hidden lg:block">Date added</span>
          <span className="flex items-center justify-center">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#b3b3b3"
            >
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
              <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
            </svg>
          </span>
        </div>

        {!loading && (
          <ul className="h-full w-full flex flex-col gap-[8px] px-[20px] py-[16px] pt-[12.5px]">
            {playlist?.tracks?.items.map((item, index) => (
              <Song
                key={item.track.id}
                name={item.track.name}
                img={item.track.album.images[0].url}
                artists={item.track.artists
                  .map((artist) => artist.name)
                  .join(", ")}
                duration={item.track.duration_ms}
                date={item.added_at}
                album={item.track.album.name}
                number={index + 1}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
