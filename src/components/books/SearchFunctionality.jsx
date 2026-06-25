"use client";

import { Search } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const SearchFunctionality = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.search.value);
    redirect(`/books?search=${e.target.search.value}`);
  };
  return (
    <div className="w-full  my-6">
      <form className="w-full max-w-sm flex gap-3" onSubmit={onSubmit}>
        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            "
            size={22}
          />

          <input
            name="search"
            type="search"
            placeholder="Search books"
            className="
            w-full
            pl-10
            pr-5
            py-2
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-sm
            outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
          px-6
          py-2
          rounded-2xl
          bg-blue-600
          text-white
          font-semibold
          hover:bg-blue-700
          transition
          shadow-sm
          "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFunctionality;
