import { IPost } from "@/components/users/newsAndEvents/LatestNewsUpdates/components/LatestNews";
import { filterData } from "../data/data";

export const filterPosts = (
  selectedCategory: number | null = null,
  selectedTags: number[] = [],
  searchQuery: string = ""
): IPost[] => {
  const query = searchQuery.toLowerCase().trim();

  if (selectedCategory === null && selectedTags.length === 0 && query === "") {
    return filterData.posts;
  }

  return filterData.posts.filter((post) => {
    const categoryMatch =
      selectedCategory === null || post.category_ids.includes(selectedCategory);

    const tagMatch =
      selectedTags.length === 0 ||
      post.tag_ids.some((tagId) => selectedTags.includes(tagId));

    const searchMatch =
      query === "" ||
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query);

    return categoryMatch && tagMatch && searchMatch;
  });
};
