export interface IMediaImage {
  id: string;
  image: string;
  updatedAt: string;
  status: boolean;
  createdAt: string;
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
