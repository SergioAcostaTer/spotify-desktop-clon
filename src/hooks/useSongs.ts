import { create } from "zustand";


type State = {
    playing: boolean;
    setPlaying: (playing: boolean) => void;
};

export const useSongs = create<State>((set) => ({
  playing: false,
  setPlaying: (playing: boolean) => set({ playing }),
}));


