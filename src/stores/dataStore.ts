import create from "zustand";

interface Data {
  characters: [];
}

export const dataStore = create((set, get) => ({}));
