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

export interface IGeneralCategory {
  _id: string;
  name: string;
}

export interface ITag {
  _id: string;
  name: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  updatedAt: string;
  createdAt: string;
}

export interface INewsItem {
  _id: string;
  images: string[];
  title: string;
  description: string;
  generalCategory: IGeneralCategory;
  activeStatus: boolean;
  tags: ITag[];
  type: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  imageUrls: string[];
}
