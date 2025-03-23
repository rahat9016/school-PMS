"use client";
import { filterPosts } from "@/lib/helper/helper";
import React, { useEffect, useState } from "react";
import { IPost } from "../../LatestNewsUpdates/components/LatestNews";
import filterData from "@/lib/data/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Recent() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>(filterData.posts);
  const [searchQuery, setSearchQuery] = useState<string>("");
  // Handler for category selection change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(Number(value));
  };

  useEffect(() => {
    const posts = filterPosts(selectedCategory, [], searchQuery);
    setFilteredPosts(posts);
  }, [searchQuery, selectedCategory]);
  return (
    <div>
      <div>
        <div className="pt-[110px]">
          <div className="flex items-center gap-2 border rounded-xl px-4 h-[40px] w-full mb-[44px]">
            <Search className="w-5 h-5 text-mediumGray group-hover:text-white" />
            <Input
              type="text"
              placeholder="Search..."
              className="border-none bg-transparent placeholder-gray-400 shadow-none py-1 placeholder:text-[#646464] group-hover:placeholder:text-white"
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-28">
              <p className="text-sm font-poppins font-medium text-main-primary">
                Recent Post
              </p>
            </div>
            <span className="w-full h-[2px] bg-softGray block"></span>
          </div>

          <Select
            value={
              selectedCategory !== null ? String(selectedCategory) : undefined
            }
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-full py-3">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {filterData?.categories?.map((category) => (
                  <SelectItem key={category.id} value={String(category.id)}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <div className="border border-softGray px-2 py-3 mt-6 rounded-md">
              <ul className="list-disc pl-5">
                {filteredPosts?.map((post) => (
                  <li key={post?.id} className="underline text-[#4A7FE9] pb-2">
                    <Link href={`/latest-news-updates/${post?.id}`}>
                      {post?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
