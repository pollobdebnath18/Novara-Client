import PurchasedBookCard from "@/components/reader/PurchasedBookCard";
import { getAllPurchasedBooks } from "@/lib/api/reader";
import { getUserSession } from "@/lib/core/session";
import { BookOpen } from "lucide-react";

const ReaderEbooksPage = async () => {
  const user = await getUserSession();

  const books = await getAllPurchasedBooks(user?.id);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-purple-50
      via-white
      to-pink-50
      p-8
      "
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* HEADER */}

        <div
          className="
  bg-white
  border
  rounded-3xl
  p-8
  shadow-sm
  hover:shadow-md
  transition-all
  duration-300
  "
        >
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div
              className="
      w-16
      h-16
      rounded-2xl
      bg-gradient-to-br
      from-purple-500
      to-pink-500
      flex
      items-center
      justify-center
      shadow-lg
      "
            >
              <BookOpen size={32} className="text-white" />
            </div>

            {/* Text */}
            <div>
              <h1
                className="
        text-3xl
        md:text-4xl
        font-bold
        text-gray-800
        tracking-tight
        "
              >
                My Purchased Ebooks
              </h1>

              <p
                className="
        text-gray-500
        mt-2
        text-sm
        md:text-base
        "
              >
                Your personal digital library — access all purchased ebooks
                anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Bottom info */}
          <div
            className="
    mt-6
    pt-5
    border-t
    flex
    items-center
    justify-between
    text-sm
    text-gray-500
    "
          >
            <span>📚 Manage and read your purchased collection</span>

            <span
              className="
      bg-purple-100
      text-purple-700
      px-4
      py-1
      rounded-full
      font-medium
      "
            >
              Digital Library
            </span>
          </div>
        </div>

        {books.length === 0 ? (
          <div
            className="
              bg-white
              border
              rounded-2xl
              p-10
              text-center
              "
          >
            <h2 className="text-xl font-semibold">No purchased books yet</h2>

            <p className="text-gray-500 mt-2">
              Purchase ebooks and they will appear here.
            </p>
          </div>
        ) : (
          <PurchasedBookCard books={books} />
        )}
      </div>
    </div>
  );
};

export default ReaderEbooksPage;
