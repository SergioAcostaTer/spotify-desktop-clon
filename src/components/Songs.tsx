import { useState } from "react";
import { timeElapsed } from "../utils/timeElapsed";

export default function Song({
  name,
  artists,
  img,
  duration,
  date,
  album,
  number,
}: {
  name: string;
  artists: string;
  img: string;
  duration: number;
  date: string;
  album: string;
  number: number;
}) {
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  };

  return (
    <li className="grid min-h-[56px] h-[56px] px-[16px] gap-[16px] rounded-[4px] hover:bg-[#444444] justify-between cursor-pointer group lg:grid-cols-[16px,6fr,4fr,3fr,minmax(120px,_1fr),16px] grid-cols-[16px,6fr,4fr,3fr]">
      <div className="flex items-center justify-center">
        <p className="text-[#b3b3b3] text-[1rem] block group-hover:hidden">
          {number}
        </p>

        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          fill="#fff"
          className="w-[24px] h-[24px] hidden group-hover:block"
        >
          <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
        </svg>
      </div>

      <div className="flex items-center">
        <img
          src={img}
          alt={name}
          className="w-[40px] h-[40px] rounded-[4px] mr-[16px]"
        />
        <div className="flex flex-col justify-center flex-1 max-w-[180px]">
          <p
            className="text-[#fff] text-[1rem] truncate"
            // style={{ maxWidth: "180px" }}
          >
            {name}
          </p>
          <p
            className="text-[#a7a7a7] text-[0.875rem] truncate"
          >
            {artists}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <p
          className="text-[#b3b3b3] text-[14px] truncate"
          style={{ maxWidth: "150px" }}
        >
          {album}
        </p>
      </div>
      <div className="flex items-center hidden lg:flex">
        <p className="text-[#b3b3b3] text-[1rem] text-[14px]">
          {timeElapsed(date)}
        </p>
      </div>

      <div className="flex items-center justify-between">
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

        <p className="text-[#b3b3b3] text-1rem">
          {`${Math.floor(duration / 60000)}:${
            (((duration / 1000) % 60) / 100).toFixed(2).split(".")[1]
          }`}
        </p>

        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-encore-id="icon"
          className="opacity-0 group-hover:opacity-100"
          fill="#fff"
        >
          <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
        </svg>
      </div>
    </li>
  );
}
