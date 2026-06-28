import BookCard from "@/components/books/BookCard";
import BookPagination from "@/components/books/BookPagination";
import FilterFunctionality from "@/components/books/FilterFunctionality";
import SearchFunctionality from "@/components/books/SearchFunctionality";
import SortFunctionality from "@/components/books/SortFunctionality";
import { getAllBooks, getPurchasedBooksByUser } from "@/lib/api/books";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";

export const metadata = {
  title: "Novara-Browse Books",
  description: "Discover the best books, stories, and authors.",
};

const BrowseBooks = async ({ searchParams }) => {
  const { search, page, genre, price, status, sort } = await searchParams;
  // console.log(params);
  const booksData = await getAllBooks(page, search, genre, price, status, sort);
  const books = booksData?.data;

  const user = await getUserSession();

  let purchasedBooks = [];

  // only check if logged in
  if (user?.id) {
    purchasedBooks = await getPurchasedBooksByUser(user.id);
  }
  const purchasedBookIds = new Set(
    purchasedBooks.map((item) => String(item.bookId)),
  );

  let updatedBooks = books.map((book) => ({
    ...book,
    isPurchased: purchasedBookIds.has(String(book._id)),
  }));

  if (status === "purchased") {
    updatedBooks = updatedBooks.filter((book) => book.isPurchased);
  }

  if (status === "available") {
    updatedBooks = updatedBooks.filter((book) => !book.isPurchased);
  }

  // const updatedBooks = books.map((book) => {
  //   const isPurchased = purchasedBooks.some(
  //     (purchase) => String(purchase.bookId) === String(book._id),
  //   );

  //   return {
  //     ...book,
  //     isPurchased,
  //   };
  // });
  // console.log("updated books", updatedBooks);
  // console.log("books :", books);

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
          <span>📚 {updatedBooks.length} Books Available</span>

          <span>🔎 Free Preview</span>

          <span>💳 Secure Purchase</span>
        </div>
      </div>

      {/* Search , Fileter , Sort */}
      <div className="flex flex-wrap items-center gap-1 md:gap-4 lg:gap-10">
        {/* Search full width on small */}
        <div className="w-full lg:w-auto">
          <SearchFunctionality />
        </div>

        {/* Genre + Price + Availability */}
        <div className="flex flex-wrap gap-4">
          <FilterFunctionality />
        </div>

        {/* Sort right side */}
        <div className="ml-auto">
          <SortFunctionality />
        </div>
      </div>

      {/* BOOK GRID */}
      {updatedBooks.length === 0 ? (
        <div
          className="
    mt-10
    min-h-[350px]
    rounded-3xl
    border
    border-purple-100
    bg-gradient-to-br
    from-purple-50
    via-white
    to-pink-50
    flex
    items-center
    justify-center
    "
        >
          <div
            className="
      text-center
      max-w-md
      px-6
      "
          >
            {/* Icon */}
            <div
              className="
        mx-auto
        w-20
        h-20
        rounded-full
        bg-gradient-to-br
        from-purple-500
        to-pink-500
        flex
        items-center
        justify-center
        shadow-lg
        "
            >
              <span className="text-4xl">📚</span>
            </div>

            {/* Heading */}

            <h2
              className="
        mt-6
        text-2xl
        md:text-3xl
        font-extrabold
        text-gray-900
        "
            >
              No Ebooks Found
            </h2>

            {/* Description */}

            <p
              className="
        mt-3
        text-gray-500
        leading-relaxed
        "
            >
              We couldn t find any ebooks matching your current filters. Try
              changing your search, genre, price range, or explore all books.
            </p>

            {/* Suggestions */}

            <div
              className="
        mt-6
        flex
        flex-wrap
        justify-center
        gap-3
        "
            >
              <span
                className="
          px-4
          py-2
          rounded-full
          bg-purple-100
          text-purple-700
          text-sm
          font-semibold
          "
              >
                🔎 Try another search
              </span>

              <span
                className="
          px-4
          py-2
          rounded-full
          bg-pink-100
          text-pink-700
          text-sm
          font-semibold
          "
              >
                📖 Browse categories
              </span>
            </div>

            {/* Button */}

            <Link
              href="/books"
              className="
        inline-flex
        mt-8
        px-7
        py-3
        rounded-xl
        bg-gradient-to-r
        from-purple-600
        to-pink-500
        text-white
        font-semibold
        shadow-lg
        hover:scale-105
        transition
        "
            >
              Explore All Books
            </Link>
          </div>
        </div>
      ) : (
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
      )}
      <div className="">
        <BookPagination bookData={booksData} />
      </div>
    </div>
  );
};

export default BrowseBooks;
