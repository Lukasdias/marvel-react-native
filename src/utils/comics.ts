import { CharacterProps } from "./character";
import { CreatorProps } from "./creator";

export interface ComicsProps extends ElementProps {
  isbn: string;
  diamondCode: string;
  characters: CharacterProps[];
  creators: CreatorProps[];
}
