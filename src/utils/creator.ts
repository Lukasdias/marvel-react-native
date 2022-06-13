import { ComicsProps } from "./comics";

export interface CreatorProps extends ElementProps {
  suffix: string;
  comics: ComicsProps[];
}
