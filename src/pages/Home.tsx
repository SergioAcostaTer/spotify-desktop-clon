import PageHeader from "../components/PageHeader";
import { PlaylistHomeHori } from "../components/PlaylistHomeHori";
import ListHome from "../components/ListHome";
import useOpacity from "../hooks/useOpacity";
import { Footer } from "../components/Footer";

function Home() {
  const { opacityHex, handleScroll } = useOpacity();

  return (
    <div
      className="h-full w-full relative overflow-y-auto invisible_scrollbar"
      onScroll={handleScroll}
    >
      <div className="absolute top-0 left-0 w-full z-0 bg-gradient-to-b from-[#4820b070] via-[#4820b030] to-[#4820b000] h-[320px] rounded-t-[8px]" />

      <div className="sticky top-0 left-0 w-full z-10">
        <PageHeader backgroundColor="#4820b0" opacityHex={opacityHex} />
      </div>

      <div className=" px-[24px] flex flex-col gap-y-[24px]">
        <h2 className="text-[#fff] text-[32px] font-bold z-10">
          {new Date().getHours() < 12
            ? "Good Morning!"
            : new Date().getHours() < 18
            ? "Good Afternoon!"
            : "Good Evening!"}
        </h2>
        
        <div className="grid xl:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-[12px]">
          <PlaylistHomeHori id="37i9dQZF1DXcBWIGoYBM5M" />
          <PlaylistHomeHori id="37i9dQZF1DX0XUsuxWHRQd" />
          <PlaylistHomeHori id="37i9dQZF1DX4JAvHpjipBk" />
          <PlaylistHomeHori id="37i9dQZF1DX4dyzvuaRJ0n" />
          <PlaylistHomeHori id="37i9dQZF1DX4SBhb3fqCJd" />
          <PlaylistHomeHori id="37i9dQZF1DX4o1oenSJRJd" />
        </div>

        <ListHome
          title="Done for you"
          playlists={[
            "37i9dQZF1E35pgyLkKQfdE",
            "37i9dQZF1E37nvpjnMlGmV",
            "37i9dQZF1E37vEtOHQRC0L",
            "37i9dQZF1E37Fe1wVxWmA2",
            "37i9dQZF1E39z5T1V6ujNX",
            "37i9dQZF1E38xGHEvHbbZK",
            "37i9dQZEVXcU959PSzt1Ge",
          ]}
        />

        <ListHome
          title="Trending"
          playlists={[
            "37i9dQZF1DXcBWIGoYBM5M",
            "37i9dQZF1DX0XUsuxWHRQd",
            "37i9dQZF1DX4JAvHpjipBk",
            "37i9dQZF1DX4dyzvuaRJ0n",
            "37i9dQZF1DX4SBhb3fqCJd",
            "37i9dQZF1DX4o1oenSJRJd",
            "37i9dQZF1DX4sWSpwq3LiO",
          ]}
        />

        <ListHome
          title="You can't miss"
          playlists={[
            "37i9dQZF1DX3sCT1ItXgNd",
            "37i9dQZF1DWVJv1UsWItkB",
            "37i9dQZF1DWV1PBrIG2weG",
            "37i9dQZF1DXb0AsvHMF4aM",
            "37i9dQZF1DWVhn3qoy98w6",
            "37i9dQZF1DWWQRwui0ExPn",
            "37i9dQZF1DWYp5sAHdz27Y",
          ]}
        />

        <ListHome
          title="Today's top hits"
          playlists={[
            "37i9dQZF1DXaxEKcoCdWHD",
            "37i9dQZF1DX1HCSfq0nSal",
            "37i9dQZF1DX10zKzsJ2jva",
            "37i9dQZF1DWZjqjZMudx9T",
            "37i9dQZF1DWXCGnD7W6WDX",
            "37i9dQZF1DXcd2Vmhfon1w",
            "37i9dQZF1DWSpF87bP6JSF",
          ]}
        />

        <ListHome
          title="The best of authors"
          playlists={[
            "37i9dQZF1EFDy1uugMRAcr",
            "37i9dQZF1EFCiYFI7a93XE",
            "37i9dQZF1EFF2FqhcrVFZE",
            "37i9dQZF1EFOqYg474T2zM",
            "37i9dQZF1EFPIilq1pTz0r",
            "37i9dQZF1EFK3SdRAXvkPq",
            "37i9dQZF1EFLPfcPryc4WP",
          ]}
        />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
