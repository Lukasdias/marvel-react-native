import { CharacterProps } from "./character";
import { CreatorProps } from "./creator";

export type ComicsProps = {
  id: number;
  title: string;
  description: string;
  isbn: string;
  diamondCode: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  characters: CharacterProps[];
  creators: CreatorProps[];
};
