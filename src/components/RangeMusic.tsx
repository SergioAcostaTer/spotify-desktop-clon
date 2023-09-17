import React, { useEffect, useState } from "react";

const RangeMusic = ({
  set,
  initial,
  before,
  after,
  className,
}: {
  set: React.Dispatch<React.SetStateAction<number>>;
  initial?: number;
  before: string;
  after: string;
  className: string;
}) => {
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
        <p className="mr-2 text-[#a7a7a7] text-[0.6875rem]">{before}</p>
        <div className={`h-[4px] bg-[#4d4d4d] rounded-[2px] ${className}`}>
          <div
            className="h-[4px] bg-white rounded-[2px] relative group-hover:bg-[#1db954]"
            style={{ width: `${position * 100}%` }}
          >
            <div className="w-[8.5px] h-[8.5px] bg-white rounded-full absolute top-[-3px] right-0 hidden group-hover:block"></div>
          </div>
        </div>
        <p className="ml-2 text-[#a7a7a7] text-[0.6875rem]">{after}</p>
      </div>
    </>
  );
};

export default RangeMusic;
