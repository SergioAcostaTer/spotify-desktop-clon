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
    setN(Math.floor((list.current?.offsetWidth || 0) / 216));
  }, [size]);

  return (
    <div>
      <div className="flex justify-between items-center mb-[19px]">
        <h2 className="text-[#fff] text-[24px] font-bold">{title}</h2>

        <p className="text-[#fff] text-[14px]">
            Show all
        </p>
      </div>
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[16px]"
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
