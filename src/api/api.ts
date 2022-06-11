import axios, { AxiosRequestHeaders, AxiosResponse } from "axios";
import md5 from "md5";
import create from "zustand";
import { createState, useState } from "@hookstate/core";

const BASE_URL = "http://gateway.marvel.com/v1/public";
const TS = "1";
const PUBLIC_KEY = "48ae307ad0fea1e6adec5d1424d6a7e1";
const PRIVATE_KEY = "551cc7d21735ded4830f3aacf17a54665db426f9";
const HASH = md5(`${TS}${PRIVATE_KEY}${PUBLIC_KEY}`);

interface API {
  route: "characters" | "comics" | "creators" | undefined;
  GET: () => Promise<AxiosResponse<any>> | any;
  updateRoute: (r: "characters" | "comics" | "creators") => void;
}

export const apiStore = create<API>((set, get) => ({
  route: undefined,
  GET: async () => {
    try {
      const response: any = await axios.get(
        `${BASE_URL}/${
          get().route
        }?orderBy=name&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  updateRoute: (r: "characters" | "comics" | "creators") => {
    set({
      route: "characters",
    });
  },
}));
