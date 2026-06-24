import { getBookmarkedBooksByUser } from "@/lib/api/books";
import { getUserSession } from "@/lib/core/session";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

const BookMarkedBook = async () => {
  const user = await getUserSession();

  const bookmarkedBooks = await getBookmarkedBooksByUser(user?.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Bookmark className="text-purple-600" />
            My Bookmarked Books
          </h1>

          <p className="text-gray-500 mt-2">Your saved ebooks collection.</p>
        </div>

        {bookmarkedBooks.length === 0 ? (
          <div
            className="
              bg-white
              border
              rounded-2xl
              p-10
              text-center
            "
          >
            <Bookmark size={45} className="mx-auto text-gray-400" />

            <h2 className="text-xl font-semibold mt-4">No bookmarked books</h2>

            <p className="text-gray-500 mt-2">
              Save your favorite books and they will appear here.
            </p>
          </div>
        ) : (
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
          >
            {bookmarkedBooks.map((item) => {
              const book = item.book;

              return (
                <div
                  key={item._id}
                  className="
                bg-white
                rounded-2xl
                shadow-sm
                border
                overflow-hidden
                hover:shadow-xl
                transition
              "
                >
                  {/* COVER */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={book?.coverImage}
                      alt={book?.title}
                      className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition
                  "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h2 className="text-xl font-bold">{book?.title}</h2>

                    <p className="text-sm text-gray-500 mt-1">
                      By {book?.writerName}
                    </p>

                    <p
                      className="
                  text-sm 
                  text-gray-600 
                  mt-3 
                  line-clamp-2
                "
                    >
                      {book?.description}
                    </p>

                    <div className="flex justify-between items-center mt-5">
                      <span
                        className="
                    px-3
                    py-1
                    bg-purple-100
                    text-purple-700
                    rounded-full
                    text-sm
                  "
                      >
                        {book?.genre}
                      </span>

                      <span className="font-bold text-purple-600">
                        ${book?.price}
                      </span>
                    </div>

                    <Link
                      href={`/books/${book?._id}`}
                      className="
                    block
                    text-center
                    mt-5
                    bg-purple-600
                    text-white
                    py-2
                    rounded-lg
                    hover:bg-purple-700
                  "
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookMarkedBook;
