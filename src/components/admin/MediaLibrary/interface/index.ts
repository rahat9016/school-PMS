export interface IData {
    selectedImageIds: string[];
    selectedCategory: string;
    imageTitles: {
      [key: string]: string;
    };
  }
  export type Tab = "all" | "hero" | "archived";