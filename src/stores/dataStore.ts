import create from "zustand";
import axios from "axios";
import md5 from "md5";

import { ComicsProps } from "../utils/comics";
import { CharacterProps } from "../utils/character";
import { CreatorProps } from "../utils/creator";

const BASE_URL = "http://gateway.marvel.com/v1/public";
const TS = "1";
const PUBLIC_KEY = "48ae307ad0fea1e6adec5d1424d6a7e1";
const PRIVATE_KEY = "551cc7d21735ded4830f3aacf17a54665db426f9";
const HASH = md5(`${TS}${PRIVATE_KEY}${PUBLIC_KEY}`);

interface Store {
  offset: number;
  limit: number;
  characters: CharacterProps[];
  creators: CreatorProps[];
  comics: ComicsProps[];
  isFetchingCharacters: boolean;
  isFetchingComics: boolean;
  isFetchingCreators: boolean;
  fetchAll: () => void;
  fetchCharacters: () => void;
  fetchComics: () => void;
  fetchCreators: () => void;
  increaseOffset: () => void;
}

export const dataStore = create<Store>((set, get) => ({
  offset: 0,
  limit: 33,
  characters: [],
  creators: [],
  comics: [],
  isFetchingCharacters: true,
  isFetchingComics: true,
  isFetchingCreators: true,
  fetchAll: async () => {
    try {
      // const responseComics: any = await axios.get(
      //   `${BASE_URL}/comics?orderBy=title&limit=${get().limit}&offset=${
      //     get().offset
      //   }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      // );
      // console.log(res.data.data.results);
      // const response2: any = await axios.get(
      //   `${BASE_URL}/comics?orderBy=name&limit=${get().limit}&offset=${
      //     get().offset
      //   }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      // );
      // const response3: any = await axios.get(
      //   `${BASE_URL}/creators?orderBy=name&limit=${get().limit}&offset=${
      //     get().offset
      //   }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      // );
      // const response2: any = await axios.get(
      //   `${BASE_URL}/characters?orderBy=name&limit=${get().limit}&offset=${
      //     get().offset
      //   }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      // );
      // const response3: any = await axios.get(
      //   `${BASE_URL}/comics?orderBy=name&limit=${get().limit}&offset=${
      //     get().offset
      //   }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      // );
      // const mappedCharacters: CharacterProps[] = response.data.data.results.map(
      //   (elem: CharacterProps) => {
      //     return {
      //       id: elem.id,
      //       name: elem.name,
      //       thumbnail: elem.thumbnail,
      //       description: elem.description,
      //       comics: elem.comics,
      //     };
      //   }
      // );
      // const cleanCharacters = mappedCharacters.filter(
      //   (e) =>
      //     !e.thumbnail.path.includes("image_not_available") &&
      //     !e.thumbnail.extension.includes("gif")
      // );
      // set((state) => ({
      //   characters: [...state.characters, ...cleanCharacters],
      // }));
      // return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  fetchCharacters: async () => {
    try {
      const response: any = await axios.get(
        `${BASE_URL}/characters?orderBy=name&limit=${get().limit}&offset=${
          get().offset
        }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      );
      const mappedCharacters: CharacterProps[] = response.data.data.results.map(
        (elem: CharacterProps) => {
          return {
            id: elem.id,
            name: elem.name,
            thumbnail: elem.thumbnail,
            description: elem.description,
            comics: elem.comics,
          };
        }
      );
      const cleanCharacters = mappedCharacters.filter(
        (e) =>
          !e.thumbnail.path.includes("image_not_available") &&
          !e.thumbnail.extension.includes("gif")
      );
      // console.log(cleanCharacters);
      set((state) => ({
        characters: [...state.characters, ...cleanCharacters],
      }));
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      set((state) => ({
        isFetchingCharacters: state.isFetchingCharacters,
      }));
    }
  },
  fetchCreators: async () => {
    set(() => ({
      isFetchingComics: true,
    }));
    try {
      const response: any = await axios.get(
        `${BASE_URL}/creators?orderBy=firstName&limit=${get().limit}&offset=${
          get().offset
        }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      );
      const mappedCreators: CreatorProps[] = response.data.data.results.map(
        (elem: any) => {
          return {
            id: elem.id,
            name: elem.fullName,
            thumbnail: elem.thumbnail,
            description: elem.description,
            comics: elem.comics,
          };
        }
      );
      const cleanCreators = mappedCreators.filter(
        (e) =>
          !e.thumbnail.path.includes("image_not_available") &&
          !e.thumbnail.extension.includes("gif")
      );
      // console.log(cleanCreators);
      set((state) => ({
        creators: [...state.creators, ...cleanCreators],
      }));
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      set((state) => ({
        isFetchingComics: false,
      }));
    }
  },
  fetchComics: async () => {
    set((state) => ({
      isFetchingComics: true,
    }));
    try {
      const response: any = await axios.get(
        `${BASE_URL}/comics?orderBy=title&limit=${get().limit}&offset=${
          get().offset
        }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      );
      const mappedComics: ComicsProps[] = response.data.data.results.map(
        (elem: any) => {
          return {
            id: elem.id,
            name: elem.title,
            thumbnail: elem.thumbnail,
            description: elem.description,
            creators: elem.creators,
            characters: elem.characters,
          };
        }
      );
      const cleanComics = mappedComics.filter(
        (e) =>
          !e.thumbnail.path.includes("image_not_available") &&
          !e.thumbnail.extension.includes("gif")
      );
      // console.log(cleanComics);
      set((state) => ({
        comics: [...state.comics, ...cleanComics],
      }));
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      set((state) => ({
        isFetchingComics: false,
      }));
    }
  },
  increaseOffset: () => {
    set((state) => ({
      offset: state.offset + 33,
    }));
  },
}));
