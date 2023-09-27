import { useState, useEffect } from "react";

const useOpacity = (): {
  opacityHex: string;
  opacity: number;
  handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  scrolled: number;
} => {
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
  const [opacity, setOpacity] = useState("00");
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setScrolled(target.scrollTop);
  };

  useEffect(() => {
    setOpacity(
      `${
        hex[Math.floor(((scrolled / 260 > 1 ? 1 : scrolled / 260) * 255) / 16)]
      }${
        hex[Math.floor(((scrolled / 260 > 1 ? 1 : scrolled / 260) * 255) % 16)]
      }`
    );
  }, [scrolled]);

  return {
    opacityHex: opacity,
    opacity: scrolled / 260 > 1 ? 1 : scrolled / 260,
    handleScroll,
    scrolled,
  };
};

export default useOpacity;
