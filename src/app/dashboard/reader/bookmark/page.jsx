import { getAllBookmarkedBooks } from "@/lib/api/reader";
import { getUserSession } from "@/lib/core/session";
import { BookOpen, BookmarkX } from "lucide-react";

const BookMarkPage = async () => {
  const user = await getUserSession();
  const bookmarkedBooks = await getAllBookmarkedBooks(user?.id);

  const isEmpty = !bookmarkedBooks || bookmarkedBooks.length === 0;

  return (
    <div className="p-6 space-y-6">
      {/* ❌ EMPTY STATE */}
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
          <div>
            <h1 className="text-3xl font-bold">My Bookmarks</h1>
            <p className="text-gray-500 mt-1">
              All your saved ebooks in one place
            </p>
          </div>
          {/* /* 📚 BOOK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkedBooks.map((item) => (
              <div
                key={item._id}
                className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
              >
                {/* Cover */}
                <img
                  src={item.book.coverImage}
                  alt={item.book.title}
                  className="w-full h-52 object-cover"
                />

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-bold line-clamp-1">
                    {item.book.title}
                  </h2>

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.book.description}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm font-medium text-blue-600">
                      ${item.book.price}
                    </span>

                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {item.book.genre}
                    </span>
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
