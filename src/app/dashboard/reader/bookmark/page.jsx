import { getAllBookmarkedBooks } from "@/lib/api/reader";
import { getUserSession } from "@/lib/core/session";
import { BookOpen, BookmarkX } from "lucide-react";

const BookMarkPage = async () => {
  const user = await getUserSession();
  const bookmarkedBooks = await getAllBookmarkedBooks(user?.id);

  const isEmpty = !bookmarkedBooks || bookmarkedBooks.length === 0;

  return (
    <div className="p-6 space-y-6">
      {/*  EMPTY STATE */}
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center text-center py-20 border rounded-xl bg-gray-50">
          <BookmarkX size={50} className="text-gray-400" />

          <h2 className="text-xl font-semibold mt-4">No Bookmarks Yet</h2>

          <p className="text-gray-500 mt-2 max-w-md">
            You haven’t saved any ebooks yet. Start exploring and bookmark your
            favorite books to see them here.
          </p>
        </div>
      ) : (
        <>
          {" "}
          {/* 🔵 Header */}
          {/* 🔵 Header */}
          <div
            className="
  mb-8
  bg-gradient-to-r
  from-purple-50
  via-white
  to-pink-50
  border
  rounded-3xl
  p-6
  shadow-sm
  "
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div
                className="
      w-14
      h-14
      rounded-2xl
      bg-gradient-to-br
      from-purple-500
      to-pink-500
      flex
      items-center
      justify-center
      text-white
      text-2xl
      shadow-md
      "
              >
                🔖
              </div>

              {/* Text */}
              <div>
                <h1
                  className="
        text-3xl
        font-bold
        text-gray-800
        "
                >
                  My Bookmarks
                </h1>

                <p
                  className="
        text-gray-500
        mt-1
        "
                >
                  Your personal collection of saved ebooks. Easily access your
                  favorite stories anytime.
                </p>
              </div>
            </div>

            {/* small info */}
            <div
              className="
    mt-5
    flex
    gap-3
    text-sm
    text-gray-600
    "
            >
              <span
                className="
      px-4
      py-2
      rounded-full
      bg-purple-100
      text-purple-700
      font-medium
      "
              >
                Saved Books
              </span>

              <span
                className="
      px-4
      py-2
      rounded-full
      bg-pink-100
      text-pink-700
      font-medium
      "
              >
                Reader Library
              </span>
            </div>
          </div>
          {/* /* 📚 BOOK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookmarkedBooks.map((item) => (
              <div
                key={item._id}
                className="
        group
        bg-white
        border
        rounded-3xl
        overflow-hidden
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
      "
              >
                {/* Cover Image */}
                <div className="relative overflow-hidden h-60">
                  <img
                    src={item.book.coverImage}
                    alt={item.book.title}
                    className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
                  />

                  {/* Genre badge */}
                  <span
                    className="
            absolute
            top-4
            right-4
            bg-white/90
            backdrop-blur
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            text-purple-600
            shadow
          "
                  >
                    {item.book.genre}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h2
                    className="
            text-xl
            font-bold
            text-gray-800
            line-clamp-1
            group-hover:text-purple-600
            transition-colors
            duration-300
          "
                  >
                    {item.book.title}
                  </h2>

                  <p
                    className="
            text-sm
            text-gray-500
            line-clamp-2
            leading-relaxed
          "
                  >
                    {item.book.description}
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-3">
                    <span
                      className="
              text-lg
              font-bold
              text-purple-600
            "
                    >
                      ৳ {item.book.price}
                    </span>

                    <button
                      className="
              px-4
              py-2
              rounded-xl
              bg-purple-600
              text-white
              text-sm
              font-medium
              hover:bg-purple-700
              transition
              duration-300
            "
                    >
                      View Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookMarkPage;
