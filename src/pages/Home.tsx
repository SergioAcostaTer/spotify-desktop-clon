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

      <div className="sticky top-0 left-0 w-full z-[100]">
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
          <PlaylistHomeHori id="0kuxXVFGhFVQ4A6h2O1AOF" />
          <PlaylistHomeHori id="5VitdxqyUyjmkYgXNX8RNr" />
          <PlaylistHomeHori id="69HCDFt53fmVdVgqzP5P6m" />
          <PlaylistHomeHori id="56WRTKlfsDnWoCbkC8dwlh" />
          <PlaylistHomeHori id="0IepDN73Y0GDNBycm63Ewx" />
          <PlaylistHomeHori id="4NE9iM0CpKZnjOrWn3FS9t" />
        </div>

        <ListHome
          title="Done for you"
          playlists={[
            "5tqGpGq44zA8KeyWLHKmGt",
            "25QTwacONij8AQjgtLP1pZ",
            "0RODEeXVmvs3Hh5LLOSDPX",
            "76Px8dvPMgwziQT91A4gYb",
            "5Lt3z1NHbUlFDKhkhK0Lr3",
            "07MBp1t71mTJfuJvQpkGbN",
            "5GuAFtIhNZrCuPVyGgePzY",
          ]}
        />
        <ListHome
          title="Trending"
          playlists={[
            "1lWpQi0IINlpDwv9jErA6O",
            "5GHxuQsFYmXYeliOAF0kFW",
            "73OAmhNbr1K4g39J0d0gBJ",
            "6vgjOd3MVHDlKoAtYJTii6",
            "79kFtlyN77ye7ruwcrmBWq",
            "1lGAiRIwpSlSFUDtbuOB9Q",
            "3qD6pP3LeADiYIBNzQ47jM",
          ]}
        />
        <ListHome
          title="You can't miss"
          playlists={[
            "3w8FFQvsrLYCaovWtakl6U",
            "4Mtd8GJht948ThClMwVJtn",
            "59DInFUMkfqg1DIZOkvmd0",
            "5ORkfsxgVpNHHhlFaxFr85",
            "7BXCb4OmGPdV0nXOyTVesT",
            "6VPHvXqqA6HluzAoGDLXBn",
            "4g50EtYbELUgvl5McHgqCi",
          ]}
        />
        <ListHome
          title="Today's top hits"
          playlists={[
            "6oszEd4U4CKJwt2h7Bul9v",
            "22AMdIOwfWk8LLfta2esGU",
            "3VEvEHoyXf0pYYbsNIXCkl",
            "2tKmIC7Sy0SU5B9iYGmjlM",
            "3A81FTUODFWeiNyVQvKCHr",
            "77xZOMuV2m0l2htoCkANmz",
            "7kikW64e1yFs4MMy24dqyx",
          ]}
        />
        <ListHome
          title="The best of authors"
          playlists={[
            "3S81R24jyGUcFqLJgtGA0u",
            "4PG0q2kVyucot2pC7QVzmT",
            "1phCbGZ1nyBpyNaRlKngaP",
            "2TIop73fC6tcCrimupU1KB",
            "1zzMa2MBDKMRT5I2G2Ybhh",
            "1XYBU0lWP2qkk8bBs4bvhD",
            "0GMHwsiwr5ckadZaqkHroT",
          ]}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
