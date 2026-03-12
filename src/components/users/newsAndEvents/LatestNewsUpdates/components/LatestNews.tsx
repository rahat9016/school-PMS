"use client";
import InputLabel from "@/components/shared/InputLabel";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFilter from "@/hooks/useFilter";

import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LatestNews() {
  const {
    handleCategoryChange,
    selectedCategory,
    setSearchQuery,
    toggleTag,
    selectedTags,
    setSelectedTags,
    filteredPosts,
    tags,
    categories,
    isLoading,
  } = useFilter();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="bg-white pt-10 lg:pt-20 pb-8 lg:pb-[64px]">
        <div className="container flex items-center justify-center h-[300px]">
          <p className="text-main-primary text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-10 lg:pt-20 pb-8 lg:pb-[64px]">
      <div className="container">
        <h1 className="text-main-primary text-xl lg:text-3xl font-bold">
          Latest News
        </h1>
        <span className="w-[140px] h-[3px] bg-main-secondary block mt-2"></span>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-row items-center mt-6 gap-1">
            <InputLabel label="Select Category:" />
            <Select
              value={selectedCategory !== null ? selectedCategory : undefined}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category._id} value={category._id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2 border rounded-xl px-4 h-[40px] w-full max-w-64">
                <Search className="w-5 h-5 text-mediumGray group-hover:text-white" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="border-none bg-transparent placeholder-gray-400 shadow-none py-1 placeholder:text-[#646464] group-hover:placeholder:text-white"
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="w-full h-[2px] bg-pureWhite block mt-3"></span>
      <div className="container">
        <div className="flex items-center mt-6 gap-1">
          <InputLabel label="Tags:" />
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
            {tags.map((tag) => (
              <button
                key={tag._id}
                onClick={() => toggleTag(tag._id)}
                className={`relative whitespace-nowrap border px-3 py-1 rounded-full text-sm transition-colors text-main-primary border-main-primary gap-2 ${
                  selectedTags.includes(tag._id) ? "bg-[#FFF1E3]" : "bg-white"
                }`}
              >
                {tag.name}
                {selectedTags.includes(tag._id) && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTags((prev) =>
                        prev.filter((t) => t !== tag._id),
                      );
                    }}
                    className="text-xs cursor-pointer"
                  >
                    ✕
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 lg:mt-[64px]">
          {filteredPosts.map((post) => (
            <div key={post._id}>
              <div
                className="h-[227px] bg-cover cursor-pointer"
                onClick={() => router.push(`/latest-news-updates/${post._id}`)}
              >
                {post.imageUrls?.[0] && (
                  <Image
                    src={post.imageUrls[0]}
                    alt={post.title}
                    width={400}
                    height={227}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <h3 className="text-lg text-black-dark font-medium mt-2">
                {post.title}
              </h3>
              <p className="text-darkGray text-sm font-poppins font-normal mt-2">
                {new Date(post.eventDate || post.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
