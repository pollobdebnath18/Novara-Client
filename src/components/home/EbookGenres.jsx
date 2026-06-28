"use client";

import React from "react";
import Link from "next/link";

const genres = [
  { name: "Fiction", icon: "📖", color: "bg-purple-100 border-purple-200" },
  { name: "Mystery", icon: "🕵️", color: "bg-blue-100 border-blue-200" },
  { name: "Romance", icon: "❤️", color: "bg-pink-100 border-pink-200" },
  { name: "Sci-Fi", icon: "🚀", color: "bg-cyan-100 border-cyan-200" },
  { name: "Fantasy", icon: "🧙‍♂️", color: "bg-violet-50 border-violet-200" },
  { name: "Horror", icon: "👻", color: "bg-gray-100 border-gray-300" },
  { name: "Biography", icon: "👤", color: "bg-green-50 border-green-200" },
  { name: "History", icon: "🏛️", color: "bg-yellow-50 border-yellow-200" },
];

const EbookGenres = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Ebook Genres
          </h2>

          <p
            className="
          text-gray-500
          mt-2
          max-w-2xl
          mx-auto
          "
          >
            Explore a wide variety of ebook genres and find stories that match
            your taste. Discover books that inspire, entertain, and educate.
          </p>
        </div>

        {/* GRID */}

        <div
          className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        gap-5
        "
        >
          {genres.map((genre, index) => (
            <Link
              key={index}
              href={`/ebooks?genre=${genre.name.toLowerCase()}`}
              className={`
              group
              p-6
              rounded-2xl
              border
              ${genre.color}
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition
              duration-300
              `}
            >
              {/* ICON */}

              <div
                className="
              text-3xl
              mb-3
              group-hover:scale-110
              transition
              "
              >
                {genre.icon}
              </div>

              {/* NAME */}

              <h3
                className="
              font-semibold
              text-lg
              text-gray-800
              "
              >
                {genre.name}
              </h3>

              <p
                className="
              text-xs
              text-gray-500
              mt-1
              "
              >
                Explore books
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbookGenres;
