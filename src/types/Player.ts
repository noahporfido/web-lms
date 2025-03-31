import { SanityImage } from "./SanityImage";

export interface Player {
  _id: string;
  name: string;
  number: number;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  image?: SanityImage;
}
