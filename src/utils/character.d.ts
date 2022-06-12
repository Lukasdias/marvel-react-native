import { ComicsProps } from "./comics";
export type CharacterProps = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  comics: ComicsProps[];
};
