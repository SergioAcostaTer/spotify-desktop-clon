import React, { useEffect, useState } from "react";

const Range = ({ w = "100px", set, initial }:{w?:string, set:React.Dispatch<React.SetStateAction<number>>, initial?:number}) => {
  const [position, setPosition] = useState(initial || 0);

  const handleMouseClickIn = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const newPosition =
      (e.clientX - container.getBoundingClientRect().left) /
      container.clientWidth;

    const clampedPosition = Math.min(1, Math.max(0, newPosition));

    setPosition(clampedPosition);
  };

//   const handleMouseClickOut = (e: React.MouseEvent<HTMLDivElement>) => {
//     const container = e.currentTarget;
//     const newPosition =
//       (e.clientX - container.getBoundingClientRect().left) /
//       container.clientWidth;

//     const clampedPosition = Math.min(1, Math.max(0, newPosition));

//     setPosition(clampedPosition);
//   };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;

    const container = e.currentTarget;
    const newPosition =
      (e.clientX - container.getBoundingClientRect().left) /
      container.clientWidth;

    const clampedPosition = Math.min(1, Math.max(0, newPosition));

    setPosition(clampedPosition);
  };

  useEffect(() => {
    set(position);
  }, [position]);

  return (
    <>
      <div
        className="group cursor-pointer h-[17.6px] relative flex items-center"
        onMouseDown={handleMouseClickIn}
        // onMouseUp={handleMouseClickOut}
        onMouseMove={handleMouseMove}
      >
        <button>
            <svg
              role="presentation"
              height="16"
              width="16"
              aria-hidden="true"
              aria-label="Volumen medio"
              id="volume-icon"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#b3b3b3"
              className="mr-2"
            >
              <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
            </svg>
        </button>
        <div
          className="h-[4px] bg-[#4d4d4d] rounded-[2px]"
          style={{ width: w }}
        >
          <div
            className="h-[4px] bg-white rounded-[2px] relative group-hover:bg-[#1db954]"
            style={{ width: `${position * 100}%` }}
          >
            <div className="w-[8.5px] h-[8.5px] bg-white rounded-full absolute top-[-3px] right-0 hidden group-hover:block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Range;
