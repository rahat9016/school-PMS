import { useGet } from "@/hooks/useGet";
import { ICategory, INewsItem, ITag } from "@/types";
import { useMemo, useState } from "react";

const useFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch news from API
  const { data: newsData, isLoading: isNewsLoading } = useGet<INewsItem[]>(
    "/news-events",
    ["news-events", "NEWS"],
    { type: "NEWS" },
  );

  // Fetch tags from API
  const { data: tagsData, isLoading: isTagsLoading } = useGet<ITag[]>(
    "/tag",
    ["tags-all"],
    { all: true },
  );

  // Fetch categories from API
  const { data: categoriesData, isLoading: isCategoriesLoading } = useGet<
    ICategory[]
  >("/category", ["categories-all"], { all: true });

  const posts = newsData?.data ?? [];
  const tags = tagsData?.data ?? [];
  const categories = categoriesData?.data ?? [];

  const isLoading = isNewsLoading || isTagsLoading || isCategoriesLoading;

  // Client-side filtering
  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (
      selectedCategory === null &&
      selectedTags.length === 0 &&
      query === ""
    ) {
      return posts;
    }

    return posts.filter((post) => {
      const categoryMatch =
        selectedCategory === null ||
        post.generalCategory?._id === selectedCategory;

      const tagMatch =
        selectedTags.length === 0 ||
        post.tags?.some((tag) => selectedTags.includes(tag._id));

      const searchMatch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.description?.toLowerCase().includes(query);

      return categoryMatch && tagMatch && searchMatch;
    });
  }, [posts, selectedCategory, selectedTags, searchQuery]);

  // Handler for category selection change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "all" ? null : value);
  };

  const toggleTag = (id: string) => {
    setSelectedTags((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  };

  return {
    selectedCategory,
    setSelectedCategory,
    selectedTags,
    setSelectedTags,
    searchQuery,
    setSearchQuery,
    filteredPosts,
    handleCategoryChange,
    toggleTag,
    tags,
    categories,
    posts,
    isLoading,
  };
};

export default useFilter;
