import { StaticImageData } from "next/image";

export interface IPost {
  id: number;
  title: string;
  date: string;
  content: string;
  content2: string;
  content3: string;
  category_ids: number[];
  tag_ids: number[];
  image: StaticImageData;
}