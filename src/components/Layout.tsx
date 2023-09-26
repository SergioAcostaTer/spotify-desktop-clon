import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Range from "./Range";
import RangeMusic from "./RangeMusic";
import Playlist from "./Playlist";

function Layout({ children }: { children: React.ReactNode }) {
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [play, setPlay] = useState(false);
  const [liked, setLiked] = useState(false);
  const { pathname } = useLocation();

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const scroller: HTMLElement | null = document.querySelector(".scroller");
    let scrollTimer: number | null = null;

    if (!scroller) return;

    const container = e.currentTarget;
    const scroll =
      container.scrollTop / (container.scrollHeight - container.clientHeight);

    scroller.style.opacity = "1";

    const scrollerHeight = container.clientHeight * scroll;
    scroller.style.top = `${scrollerHeight}px`;

    console.log(scrollerHeight, scroll);

    if (scrollTimer !== null) {
      clearTimeout(scrollTimer);
    }

    scrollTimer = window.setTimeout(() => {
      scroller.style.opacity = "0";
    }, 1000);
  }

  const handleLiked = () => {
    setLiked(!liked);
  };

  const handleRepeat = () => {
    setRepeat(!repeat);
  };

  const handleShuffle = () => {
    setShuffle(!shuffle);
  };

  const handlePlay = () => {
    setPlay(!play);
  };

  const handlePrev = () => {
    console.log("prev");
  };

  const handleNext = () => {
    console.log("next");
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-between p-[8px] pb-0 bg-black text-white hidden sm:flex gap-[16px]">
        <div className="min-h-[658px] h-full bg-black text-white flex flex-row gap-[8px]">
          <nav className="w-[470px] min-w-[287px] rounded-[8px] flex flex-col gap-[8px]">
            <div className="w-full min-h-[112px] h-[112px] rounded-[8px] bg-[#121212]">
              <ul className="flex flex-col py-[8px] px-[12px]">
                <li className="py-[4px] px-[12px] rounded-[8px]">
                  <Link
                    to="/"
                    className="text-white hover:text-gray-500 min-h-[40px] h-[40px] items-center flex flex-row gap-[20px]"
                  >
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                      fill={pathname === "/" ? "#ffffff" : "#b3b3b3"}
                    >
                      <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
                    </svg>

                    <span
                      className="text-[1rem] leading-[24px] font-bold text-[#b3b3b3]"
                      style={{
                        color: pathname === "/" ? "#ffffff" : "#b3b3b3",
                      }}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li className="py-[4px] px-[12px] rounded-[8px]">
                  <Link
                    to="/search"
                    className="text-white hover:text-gray-500h min-h-[40px] h-[40px] items-center flex flex-row gap-[20px]"
                  >
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                      fill={pathname === "/search" ? "#ffffff" : "#b3b3b3"}
                    >
                      {pathname === "/search" && (
                        <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path>
                      )}
                      <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                    </svg>

                    <span
                      className="text-[1rem] leading-[24px] font-bold text-[#b3b3b3]"
                      style={{
                        color: pathname === "/search" ? "#ffffff" : "#b3b3b3",
                      }}
                    >
                      Search
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full rounded-[8px] bg-[#121212] h-full min-h-[538.4px]">
              <div>
                <header className="flex w-full justify-between items-center py-[8px] px-[16px]">
                  <div className="group cursor-pointer relative flex items-center py-[4px] px-[8px] h-[40px]">
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                      fill="#b3b3b3"
                      className="group-hover:fill-[#fff] transition duration-100 ease-in-out mr-[8px]"
                    >
                      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                    </svg>
                    <h1 className="text-[1rem] leading-[24px] font-bold text-[#b3b3b3] ml-[8px] group-hover:text-[#fff] transition duration-100 ease-in-out">
                      Your Library
                    </h1>
                  </div>

                  <div className="flex gap-[25px]">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      fill="#b3b3b3"
                    >
                      <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                    </svg>

                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      fill="#b3b3b3"
                    >
                      <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
                    </svg>
                  </div>
                </header>

                <div className="w-full flex items-center justify-between">
                  <ul className="flex w-full mx-[16px] py-[8px] gap-[8px] overflow-x-scroll invisible_scrollbar">
                    <button>
                      <li className="py-[4px] px-[12px] rounded-[32px] bg-[#232323] text-white text-[15px] leading-[20px] font-bold min-h-[32px]">
                        Listas
                      </li>
                    </button>

                    <button>
                      <li className="py-[4px] px-[12px] rounded-[32px] bg-[#232323] text-white text-[15px] leading-[20px] font-bold min-h-[32px]">
                        Artistas
                      </li>
                    </button>

                    <button>
                      <li className="py-[4px] px-[12px] rounded-[32px] bg-[#232323] text-white text-[15px] leading-[20px] font-bold min-h-[32px]">
                        Álbumes
                      </li>
                    </button>

                    <button>
                      <li className="py-[4px] px-[12px] rounded-[32px] bg-[#232323] text-white text-[15px] leading-[20px] font-bold min-h-[32px]">
                        Podcasts
                      </li>
                    </button>
                  </ul>
                </div>

                <div className="w-full h-[34px] flex items-center justify-between px-[16px] pt-[2px]">
                  <span className="flex w-[32px] h-[32px] items-center justify-center">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      fill="#8f8f8f"
                    >
                      <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                    </svg>
                  </span>

                  <p>Recientes</p>
                </div>
              </div>

              <div
                className="w-full flex flex-col p-[8px] invisible_scrollbar relative overflow-y-scroll h-[calc(100%-139px)]"
                onScroll={handleScroll}
              >
                <div className="scroller absolute top-0 right-0 w-[15px] h-[30px] bg-[#f0f0f0ba] transition-opacity duration-300 ease-in-out" />

                <Playlist id="5VLzuIGTeHqyAoPGZVVcPW" />
                <Playlist id="37i9dQZF1DXcBWIGoYBM5M" />
                <Playlist id="37i9dQZF1DX4JAvHpjipBk" />
                <Playlist id="37i9dQZF1DX4dyzvuaRJ0n" />
                <Playlist id="37i9dQZF1DX4SBhb3fqCJd" />
                <Playlist id="37i9dQZF1DX4UtSsGT1Sbe" />
                <Playlist id="37i9dQZF1DX4o1oenSJRJd" />
                <Playlist id="37i9dQZF1DX4WYpdgoIcn6" />
                <Playlist id="37i9dQZF1DX4sWSpwq3LiO" />
                <Playlist id="37i9dQZF1DX4JAvHpjipBk" />
              </div>
            </div>
          </nav>
          <div className="w-full h-full flex flex-row justify-end items-center bg-[#121212] rounded-[8px]">
            {children}
          </div>
        </div>

        <div className="h-[72px] bg-black text-white flex justify-between items-center z-10 pb-[8px]">
          <div className="pl-[10px] flex flex-row gap-[16px] items-center">
            <div>
              <img
                src="https://i.scdn.co/image/ab67616d00004851a0b117bfde057af7020ae5eb"
                alt="album"
                className="w-[56px] h-[56px] rounded-[4px]"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <span className="text-[.9rem] leading-[15px] font-bold mb-[4px] text-[#f7f7f7]">
                Puliendo Pakistaní
              </span>
              <span className="text-[0.7rem] leading-[10px] text-[#b3b3b3]">
                Abhit Hathi
              </span>
            </div>

            <button>
              {!liked ? (
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="#b3b3b3"
                  onClick={handleLiked}
                >
                  <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
                </svg>
              ) : (
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="#1db954"
                  onClick={handleLiked}
                >
                  <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-col h-[57.6px]">
            <div className="flex flex-row gap-[16px] items-center mb-[8px] justify-center h-[32px]">
              <button
                onClick={handleRepeat}
                className="h-[32px] w-[32px] flex justify-center items-center"
              >
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill={repeat ? "#1db954" : "#b2b2b2"}
                  className="transition duration-100 ease-in-out"
                >
                  <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                  <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
                </svg>
              </button>

              <button
                onClick={handlePrev}
                className="h-[35px] w-[35px] flex justify-center items-center"
              >
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="#b2b2b2"
                >
                  <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                </svg>
              </button>

              <button
                onClick={handlePlay}
                className="h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center"
              >
                {play ? (
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                  </svg>
                ) : (
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                  </svg>
                )}
              </button>

              <button
                onClick={handleNext}
                className="h-[35px] w-[35px] flex justify-center items-center"
              >
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="#b2b2b2"
                >
                  <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
                </svg>
              </button>

              <button
                onClick={handleShuffle}
                className="h-[35px] w-[35px] flex justify-center items-center"
              >
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill={shuffle ? "#1db954" : "#b2b2b2"}
                  className={`transition duration-100 ease-in-out`}
                >
                  <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
                </svg>
              </button>
            </div>

            <RangeMusic
              set={setVolume}
              initial={0}
              before={"0:00"}
              after={"3:00"}
              className="w-[250px] lg:w-[400px]"
            />
          </div>
          <div className="pr-[10px] flex flex-row gap-[16px] items-center">
            <button>
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                fill="#b3b3b3"
              >
                <path d="M11.196 8 6 5v6l5.196-3z"></path>
                <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path>
              </svg>
            </button>

            <button>
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                fill="#b3b3b3"
              >
                <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
              </svg>
            </button>

            <button>
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                fill="#b3b3b3"
              >
                <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
              </svg>
            </button>

            <button>
              <svg
                role="presentation"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                fill="#b3b3b3"
              >
                <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
                <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
            </button>

            <Range w="100px" set={setVolume} initial={volume} />

            <button>
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="#b3b3b3"
                data-encore-id="icon"
              >
                <path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path>
                <path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="h-[100vh] w-[100vw] flex flex-col justify-center p-[8px] bg-[#121212] items-center sm:hidden">
        <div className="p-[32px] flex flex-col justify-center items-center">
          <img
            src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg"
            alt="logo"
            className="w-[70px] h-[70px]"
          />

          <h1 className="mt-[40px] mb-[16px] leading-[36px] font-bold text-center text-white text-[34px]">
            Navegador no compatible
          </h1>
          <p className="text-[#a7a7a7] text-center text-[1rem] leading-[24px] mb-[40px] text-[16px]">
            Spotify no está disponible en este navegador. Para disfrutar de la
            mejor experiencia de audio, actualiza el navegador o descarga la
            aplicación de Spotify.
          </p>

          <Link
            className="bg-white border-[1px] border-[#878787] rounded-[48px] text-black px-[32px] py-[12px] text-[1rem] leading-[24px] font-bold m-0"
            to="#"
          >
            Descargar la aplicación
          </Link>

          <Link
            className="text-white text-center text-[1rem] leading-[24px] mt-[26px] text-[17px] font-bold"
            to="#"
          >
            Más información
          </Link>
        </div>
      </div>
    </>
  );
}

export default Layout;
