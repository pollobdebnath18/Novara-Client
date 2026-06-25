"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const FilterFunctionality = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.set("page", 1);

    router.push(`/books?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 my-6">
      {/* Genre */}
      <select
        onChange={(e) => handleFilter("genre", e.target.value)}
        className="
        px-4
        py-2
        rounded-xl
        border
        bg-white
        outline-none
        "
      >
        <option value="">All Genres</option>

        <option value="Novel">Novel</option>

        <option value="Fantasy">Fantasy</option>

        <option value="Thriller">Thriller</option>

        <option value="Science Fiction">Science Fiction</option>
      </select>

      {/* Price */}
      <select
        onChange={(e) => handleFilter("price", e.target.value)}
        className="
        px-4
        py-2
        rounded-xl
        border
        bg-white
        "
      >
        <option value="">All Price</option>

        <option value="0-300">0 - 300৳</option>

        <option value="300-600">300 - 600৳</option>

        <option value="600-1000">600 - 1000৳</option>
      </select>

      {/* Availability */}
      <select
        onChange={(e) => handleFilter("status", e.target.value)}
        className="
        px-4
        py-2
        rounded-xl
        border
        bg-white
        "
      >
        <option value="">All Availability</option>

        <option value="unsold">In Stock</option>

        <option value="sold">Sold</option>
      </select>
    </div>
  );
};

export default FilterFunctionality;
