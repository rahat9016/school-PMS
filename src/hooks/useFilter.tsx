import filterData from "@/lib/data/data";
import { filterPosts } from "@/lib/helper/helper";
import { IPost } from "@/types";
import { useEffect, useState } from "react";

const useFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>(filterData.posts);

  // Handler for category selection change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(Number(value));
  };

  const toggleTag = (id: number) => {
    setSelectedTags((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const posts = filterPosts(selectedCategory, selectedTags, searchQuery);
    setFilteredPosts(posts);
  }, [selectedTags, searchQuery, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    selectedTags,
    setSelectedTags,
    searchQuery,
    setSearchQuery,
    filteredPosts,
    setFilteredPosts,
    handleCategoryChange,
    toggleTag,
  };
};

export default useFilter;
