import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function PurchasedBookCard({ books = [] }) {
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      "
    >
      {books.map((item) => {
        const book = item.book;

        return (
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
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            {/* IMAGE */}

            <div className="h-64 overflow-hidden relative">
              <img
                src={book?.coverImage}
                alt={book?.title}
                className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition-transform
                duration-500
                "
              />

              <div
                className="
                absolute
                top-4
                right-4
                bg-green-100
                text-green-700
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                "
              >
                Purchased
              </div>
            </div>

            {/* CONTENT */}

            <div className="p-5 space-y-3">
              <h2
                className="
                text-xl
                font-bold
                text-gray-800
                group-hover:text-purple-600
                transition
                "
              >
                {book?.title}
              </h2>

              <p className="text-sm text-gray-500 line-clamp-2">
                {book?.description}
              </p>

              <div className="flex justify-between items-center pt-3">
                <span
                  className="
                  text-purple-600
                  font-bold
                  "
                >
                  ৳ {book?.price}
                </span>

                <span
                  className="
                  text-xs
                  bg-gray-100
                  px-3
                  py-1
                  rounded-full
                  "
                >
                  {book?.genre}
                </span>
              </div>

              <Link
                href={`/books/${book?._id}`}
                className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                w-full
                bg-purple-600
                text-white
                py-3
                rounded-xl
                hover:bg-purple-700
                transition
                duration-300
                "
              >
                <BookOpen size={18} />
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
