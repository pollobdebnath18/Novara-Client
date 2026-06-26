import { getFeaturedBooks } from "@/lib/api/books";
import React from "react";
import BookCard from "../books/BookCard";

const Featured = async () => {
  const books = await getFeaturedBooks();
  console.log(books);
  return (
    <div className="p-6 mt-20">
      <section className="mb-10">
        {/* Heading */}
        <div className="mb-8 text-center flex flex-col items-center">
          <div
            className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-blue-100
        text-blue-600
        text-sm
        font-semibold
        mb-4
        "
          >
            📚 Featured Collection
          </div>

          <h2
            className="
        text-3xl
        md:text-4xl
        font-extrabold
        text-gray-900
        "
          >
            Featured Books
          </h2>

          <p
            className="
        mt-3
        max-w-2xl
        text-gray-500
        text-base
        leading-relaxed
        "
          >
            Explore handpicked ebooks from talented writers. Discover inspiring
            stories, knowledge, and ideas carefully selected for our readers.
          </p>

          <div
            className="
        flex
        justify-center
        gap-5
        mt-5
        text-sm
        text-gray-500
        "
          >
            <span>📖 New Releases</span>

            <span>✍️ Top Writers</span>

            <span>⭐ Reader Favorites</span>
          </div>
        </div>

        {/* Books Grid */}

        <div
          className="
      grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-5
      "
        >
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Featured;
