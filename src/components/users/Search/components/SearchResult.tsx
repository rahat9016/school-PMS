"use client";
import { Input } from "@/components/ui/input";
import useFilter from "@/hooks/useFilter";
import { filterData } from "@/lib/data/data";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchResult() {
  const { filteredPosts, setSearchQuery } = useFilter();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    setSearchQuery(query as string);
  }, [query, setSearchQuery]);

  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex items-center justify-between pt-10 lg:pt-20">
          <h3 className=" text-sm font-medium text-[#363739]">
            {filteredPosts.length} results found
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center">
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
      </div>
      <span className="w-full h-[2px] bg-pureWhite block mt-3 mb-9"></span>
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row gap-6 items-start pb-10">
          <div className="w-full md:w-8/12 lg:w-9/12 flex flex-col gap-6 h-full">
            {filteredPosts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center">
                <p>Not Found Data</p>
              </div>
            ) : (
              filteredPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-3 lg:gap-6 md:h-[267px] border rounded-lg p-5"
                >
                  <div
                    className="md:h-[227px] bg-cover"
                    onClick={() =>
                      router.push(`/latest-news-updates/${post.id}`)
                    }
                  >
                    <Image
                      src={post.image}
                      alt="img"
                      className="md:h-[227px]"
                      width={363}
                      height={227}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-sm md:text-[20px] text-charcoalGray font-medium">
                      {post.title}
                    </h3>
                    <p className="text-darkGray text-sm font-poppins font-normal">
                      {post.date}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="w-full md:w-4/12 lg:w-3/12 bg-main-primary p-10 rounded-lg">
            <h3 className="text-white font-poppins text-2xl font-semibold">
              Categories
            </h3>
            <span className="block w-[51px] h-[2px] bg-main-secondary mt-3" />
            <ul className="mt-5 md:mt-10 flex flex-col gap-3 lg:gap-5">
              {filterData.categories.map((category) => (
                <li
                  key={category.id}
                  className="text-white uppercase text-base font-poppins font-medium"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
