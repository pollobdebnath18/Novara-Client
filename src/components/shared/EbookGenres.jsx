"use client";

import React from "react";
import Link from "next/link";

const genres = [
  { name: "Fiction", icon: "📖", color: "from-purple-500 to-pink-500" },
  { name: "Mystery", icon: "🕵️", color: "from-blue-500 to-indigo-500" },
  { name: "Romance", icon: "❤️", color: "from-pink-500 to-rose-500" },
  { name: "Sci-Fi", icon: "🚀", color: "from-cyan-500 to-blue-500" },
  { name: "Fantasy", icon: "🧙‍♂️", color: "from-violet-500 to-purple-600" },
  { name: "Horror", icon: "👻", color: "from-gray-700 to-black" },
  { name: "Biography", icon: "👤", color: "from-green-500 to-emerald-600" },
  { name: "History", icon: "🏛️", color: "from-yellow-500 to-orange-500" },
];

const EbookGenres = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Explore Ebook Genres</h2>

          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Explore a wide variety of ebook genres and find stories that match
            your taste. From timeless classics to modern fiction, discover books
            that inspire, entertain, and educate.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {genres.map((genre, index) => (
            <Link
              key={index}
              href={`/ebooks?genre=${genre.name.toLowerCase()}`}
              className={`
                group
                relative
                p-6
                rounded-2xl
                text-center
                text-white
                shadow-md
                overflow-hidden
                transition-all
                duration-300
                hover:scale-[1.05]
                bg-gradient-to-r ${genre.color}
              `}
            >
              {/* ICON */}
              <div className="text-3xl mb-2">{genre.icon}</div>

              {/* NAME */}
              <h3 className="font-semibold text-lg">{genre.name}</h3>

              {/* HOVER EFFECT */}
              <div
                className="
                absolute
                inset-0
                bg-black/10
                opacity-0
                group-hover:opacity-100
                transition
              "
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbookGenres;
