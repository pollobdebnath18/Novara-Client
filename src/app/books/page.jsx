import BookCard from "@/components/books/BookCard";
import BookPagination from "@/components/books/BookPagination";
import { getAllBooks, getPurchasedBooksByUser } from "@/lib/api/books";
import { getUserSession } from "@/lib/core/session";

const BrowseBooks = async ({ searchParams }) => {
  const params = await searchParams;
  // console.log(params);
  const books = await getAllBooks(params.page);
  // console.log(books);

  const user = await getUserSession();

  let purchasedBooks = [];

  // only check if logged in
  if (user?.id) {
    purchasedBooks = await getPurchasedBooksByUser(user.id);
  }

  const updatedBooks = books.data.map((book) => {
    const isPurchased = purchasedBooks.some(
      (purchase) => String(purchase.bookId) === String(book._id),
    );

    return {
      ...book,
      status: isPurchased ? "sold" : "unsold",
    };
  });

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Explore Ebooks</h1>

        <p className="text-gray-500 max-w-2xl">
          Discover ebooks from talented writers. Browse different genres,
          explore stories, and build your digital library.
        </p>

        <div className="flex gap-4 text-sm text-gray-400">
          <span>📚 {books.length} Books Available</span>

          <span>🔎 Free Preview</span>

          <span>💳 Secure Purchase</span>
        </div>
      </div>

      {/* BOOK GRID */}

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        "
      >
        {updatedBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <div className="">
        <BookPagination booksData={books} />
      </div>
    </div>
  );
};

export default BrowseBooks;
