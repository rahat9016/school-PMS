"use client";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filterData } from "@/lib/data/data";
import { filterPosts } from "@/lib/helper/helper";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IPost } from "../../newsAndEvents/LatestNewsUpdates/components/LatestNews";

const dates = [
  "April 2024",
  "February 2024",
  "January 2024",
  "October 2023",
  "September 2023",
  "August 2023",
  "June 2023",
  "May 2023",
  "April 2023",
  "March 2023",
  "February 2023",
  "January 2023",
  "December 2022",
];

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
        <div className="pt-10 lg:pt-[110px]">
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
          <div className="flex items-center gap-3 my-6">
            <div className="w-52">
              <p className="text-sm font-poppins font-medium text-main-primary">
                Recent Comments
              </p>
            </div>
            <span className="w-full h-[2px] bg-softGray block"></span>
          </div>
          <div className="flex items-center gap-3 my-6">
            <div className="w-28">
              <p className="text-sm font-poppins font-medium text-main-primary">
                Archives
              </p>
            </div>
            <span className="w-full h-[2px] bg-softGray block"></span>
          </div>
          <div className="mb-10">
            <ScrollArea className="h-[423px] w-full rounded-md border p-3">
              <ul className="list-disc pl-4">
                {dates.map((date, index) => (
                  <li
                    key={index}
                    className="text-blue-600 hover:underline text-[#4A7FE9]"
                  >
                    <Link href="#" className=" underline py-1 block">
                      {date}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
