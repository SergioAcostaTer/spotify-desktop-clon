import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { PlaylistHomeVert } from "./PlaylistHomeVert";

const ListHome = ({
  playlists,
  title,
}: {
  playlists: string[];
  title: string;
}) => {
  const list = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(6);
  const size = useWindowSize();

  useEffect(() => {
    setN(Math.floor((list.current?.offsetWidth || 0) / (size.width ? (size.width > 1280 ? 186 +16: 166 + 16) : 0)));
  }, [size]);

  return (
    <div className="mb-[32px]">
      <div className="flex justify-between items-center mb-[19px]">
        <h2 className="text-[#fff] text-[24px] font-bold">{title}</h2>

        <p className="text-[#fff] text-[14px] font-bold cursor-pointer hover:underline">
            Show all
        </p>
      </div>
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(166px,1fr))] gap-[16px] xl:grid-cols-[repeat(auto-fill,minmax(186px,1fr))] xl:gap-[16px]"
        ref={list}
      >
        {[...Array(n)].map((_, i) => (
          <PlaylistHomeVert key={i} id={playlists[i]} />
        ))}
      </div>
    </div>
  );
};

export default ListHome;
