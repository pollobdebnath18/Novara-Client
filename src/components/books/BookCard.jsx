"use client";

import { Pagination, Table } from "@heroui/react";
import Link from "next/link";

export default function BookCard({ book }) {
  const genreColor = {
    Programming: "bg-indigo-100 text-indigo-700 ring-indigo-200",
    Technology: "bg-blue-100 text-blue-700 ring-blue-200",
    Education: "bg-emerald-100 text-emerald-700 ring-emerald-200",
    Science: "bg-purple-100 text-purple-700 ring-purple-200",
  };

  const isPurchased = book.status === "sold";

  return (
    <>
      <div
        className="
      group
      relative
      rounded-2xl
      overflow-hidden
      border
      bg-white
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="
          h-48
          w-full
          object-cover
          group-hover:scale-105
          transition-transform
          duration-300
          "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* STATUS */}
          <div className="absolute top-3 right-3">
            {isPurchased ? (
              <span
                className="
              px-3 py-1
              text-xs
              font-semibold
              rounded-full
              bg-red-500
              text-white
              shadow
              "
              >
                Purchased
              </span>
            ) : (
              <span
                className="
              px-3 py-1
              text-xs
              font-semibold
              rounded-full
              bg-green-500
              text-white
              shadow
              "
              >
                Available
              </span>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-3">
          <h2
            className="
          text-base
          font-bold
          text-gray-900
          line-clamp-2
          "
          >
            {book.title}
          </h2>

          <p className="text-xs text-gray-500">
            by
            <span className="font-medium text-gray-700 ml-1">
              {book.writerName || book.email}
            </span>
          </p>

          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-green-600">
              <span className="text-3xl">৳</span>
              {book.price}
            </p>

            <span
              className={`
            text-xs
            px-2
            py-1
            rounded-full
            font-medium
            ring-1
            ${
              genreColor[book.genre] ||
              "bg-gray-100 text-gray-700 ring-gray-200"
            }
            `}
            >
              {book.genre}
            </span>
          </div>

          {/* BUTTON */}

          <Link
            href={`/books/${book._id}`}
            className={`
          w-full
          mt-3
          flex
          items-center
          justify-center
          py-2.5
          rounded-lg
          text-sm
          font-semibold
          transition
          shadow-sm

          ${
            isPurchased
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-gradient-to-r from-black to-gray-800 text-white hover:shadow-md"
          }

          `}
          >
            {isPurchased ? "Already Purchased" : "View Details"}
          </Link>
        </div>
      </div>
    </>
  );
}
