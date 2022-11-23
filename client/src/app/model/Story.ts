import { Content } from "./Content";

export interface Story {
  title: string;
  subtitie: string;
  name: string;
  contents: [Content];
  createdAt: Date;
}