import { ComicsProps } from "./comics";

export type CreatorProps = {
  id: number;
  suffix: string;
  fullName: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  comics: ComicsProps[];
};
