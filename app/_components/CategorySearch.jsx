"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () =>
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });

  return (
    <div className="mb-10 flex flex-col items-center space-y-3">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl px-3">
        Search Your Doctor and Book Appointment in one click
      </h2>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search />
          Search
        </Button>
      </div>
      <div>
        {/* display list of category */}
        <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 ">
          {categoryList.map(
            (item, index) =>
              index < 6 && (
                <div
                  key={index}
                  className="flex flex-col text-center gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer"
                >
                  <Image
                    src={item?.Icon?.url}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                  <label className="text-blue-600 text-sm">{item?.Name}</label>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySearch;
