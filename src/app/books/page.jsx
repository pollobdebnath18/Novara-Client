import BookCard from "@/components/books/BookCard";
import { getAllBooks } from "@/lib/api/books";
import { getUserSession } from "@/lib/core/session";
// import BookCard from "@/components/BookCard";

const BrowseBooks = async () => {
  const books = await getAllBooks();
//   const user = await getUserSession();
//   console.log(books)

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Explore Ebooks
        </h1>

        <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
          Discover high-quality ebooks from writers around the world. Read,
          learn, and grow with curated content across different genres.
        </p>

        {/* META INFO */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
          <span>📚 {books.length} available books</span>
          <span>•</span>
          <span>🔎 Free browsing</span>
          <span>•</span>
          <span>💳 Purchase requires login</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
