"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect } from "react";
import GlobalApi from "../_utils/GlobalApi";

const CategorySearch = () => {
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () =>
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
    });

  return (
    <div className="mb-10 flex flex-col items-center space-y-3">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl mx-3">
        Search Your Doctor and Book Appointment in one click
      </h2>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search />
          Search
        </Button>
      </div>
    </div>
  );
};

export default CategorySearch;
