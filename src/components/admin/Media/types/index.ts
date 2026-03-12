export interface IMediaImage {
  id: string;
  image: string;
  updatedAt: string;
  status: boolean;
  createdAt: string;
  actions?: string;
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
  actions?: string;
}

export interface INewsAndEvents {
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
  actions?: string;
}

export interface IMediaVideo {
  videoThumbnail: string;
  id: string;
  title: string;
  link: string;
  duration: string;
  status: boolean;
  description: string;
  updatedAt: string;
  createdAt: string;
  actions?: string;
}

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  updatedAt: string;
  createdAt: string;
  actions?: string;
}
