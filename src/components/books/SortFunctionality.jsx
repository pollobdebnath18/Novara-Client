"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SortFunctionality = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSort = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    params.set("page", 1);

    router.push(`/books?${params.toString()}`);
  };

  return (
    <div className="flex justify-end my-6">
      <select
        onChange={handleSort}
        className="
        px-4
        py-2
        rounded-xl
        border
        bg-white
        shadow-sm
        outline-none
        focus:ring-2
        focus:ring-blue-500
        "
      >
        <option value="">Sort By</option>

        <option value="newest">Newest</option>

        <option value="price-low">Price: Low - High</option>

        <option value="price-high">Price: High - Low</option>
      </select>
    </div>
  );
};

export default SortFunctionality;
