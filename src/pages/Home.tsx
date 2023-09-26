import PageHeader from "../components/PageHeader";
import { PlaylistHomeHori } from "../components/PlaylistHomeHori";
import ListHome from "../components/ListHome";
import { useState } from "react";
const hex: { [key: number]: string } = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "a",
  11: "b",
  12: "c",
  13: "d",
  14: "e",
  15: "f",
};


function Home() {
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setScrolled(target.scrollTop);
  };

  return (
    <div className="h-full w-full relative overflow-y-auto invisible_scrollbar" onScroll={handleScroll}>
      <div className="absolute top-0 left-0 w-full z-0 bg-gradient-to-b from-[#4820b070] via-[#4820b030] to-[#4820b000] h-[320px]"/>

      <div className="sticky top-0 left-0 w-full z-10">
        <PageHeader backgroundColor="#4820b0" opacity={`${
          hex[
            Math.floor(((scrolled / 260 > 1 ? 1 : scrolled / 260) * 255) / 16)
          ]
        }${
          hex[
            Math.floor(((scrolled / 260 > 1 ? 1 : scrolled / 260) * 255) % 16)
          ]
        }`}
      />
      </div>

      <div className=" px-[24px] flex flex-col gap-y-[24px]">
        <div>
          <h2 className="text-[#fff] text-[32px] font-bold">
            {new Date().getHours() < 12
              ? "Good Morning!"
              : new Date().getHours() < 18
              ? "Good Afternoon!"
              : "Good Evening!"}
          </h2>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-2 gap-x-[16px] gap-y-[12px]">
          <PlaylistHomeHori id="37i9dQZF1DXcBWIGoYBM5M" />
          <PlaylistHomeHori id="37i9dQZF1DX0XUsuxWHRQd" />
          <PlaylistHomeHori id="37i9dQZF1DX4JAvHpjipBk" />
          <PlaylistHomeHori id="37i9dQZF1DX4dyzvuaRJ0n" />
          <PlaylistHomeHori id="37i9dQZF1DX4SBhb3fqCJd" />
          <PlaylistHomeHori id="37i9dQZF1DX4o1oenSJRJd" />
        </div>

        <ListHome
          title="Done for Sergio Acosta"
          playlists={[
            "37i9dQZF1DXcBWIGoYBM5M",
            "37i9dQZF1DX0XUsuxWHRQd",
            "37i9dQZF1DX4JAvHpjipBk",
            "37i9dQZF1DX4dyzvuaRJ0n",
            "37i9dQZF1DX4SBhb3fqCJd",
            "37i9dQZF1DX4o1oenSJRJd",
          ]}
        />
     
      </div>
    </div>
  );
}

export default Home;
