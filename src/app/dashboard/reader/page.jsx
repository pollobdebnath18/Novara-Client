import React from "react";
import Link from "next/link";

import {
  BookOpen,
  Bookmark,
  ShoppingBag,
  User,
  ArrowRight,
  Clock,
} from "lucide-react";

import { getUserSession } from "@/lib/core/session";
import { getAllBookmarkedBooks, getAllPurchasedBooks } from "@/lib/api/reader";

const ReaderHomePage = async () => {
  const user = await getUserSession();

  const purchasedBooks = (await getAllPurchasedBooks(user?.id)) || [];

  const bookmarks = (await getAllBookmarkedBooks(user?.id)) || [];

  const totalCost = purchasedBooks.reduce(
    (sum, item) => sum + Number(item.priceId || 0),
    0,
  );

  const stats = [
    {
      title: "Purchased Books",
      value: purchasedBooks.length,
      icon: <BookOpen size={22} />,
      link: "/dashboard/user/purchased",
    },

    {
      title: "Purchase History",
      value: purchasedBooks.length,
      icon: <ShoppingBag size={22} />,
      link: "/dashboard/user/history",
    },

    {
      title: "Bookmarks",
      value: bookmarks.length,
      icon: <Bookmark size={22} />,
      link: "/dashboard/user/bookmarks",
    },

    {
      title: "Total Cost",
      value: `৳ ${totalCost}`,
      icon: <ShoppingBag size={22} />,
      link: "/dashboard/user/history",
    },
  ];

  return (
    <div className="space-y-8 mx-6 my-5">
      {/* Welcome */}

      <section
        className="
  rounded-3xl
  p-8
  bg-white
  border
  border-gray-200
  shadow-sm
  flex
  justify-between
  items-center
  "
      >
        <div>
          <h1
            className="
      text-3xl
      md:text-4xl
      font-extrabold
      tracking-tight
      text-gray-900
      "
          >
            Welcome back, {user?.name} 
          </h1>

          <p
            className="
      mt-3
      text-gray-500
      text-sm
      md:text-base
      max-w-xl
      leading-relaxed
      "
          >
            Your digital library is ready. Continue reading your purchased
            ebooks, explore saved books, and discover new stories from talented
            writers.
          </p>

          <div
            className="
      mt-5
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      bg-purple-50
      text-purple-700
      text-sm
      font-medium
      border
      border-purple-100
      "
          >
            📚 {purchasedBooks.length} ebooks purchased
          </div>
        </div>

        
      </section>

      {/* Stats */}

      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
"
      >
        {stats.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="
bg-white
border
rounded-2xl
p-5
flex
items-center
gap-4
shadow-sm
hover:shadow-xl
hover:-translate-y-1
transition
duration-300
"
          >
            <div
              className="
p-3
rounded-xl
bg-indigo-100
text-indigo-600
"
            >
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-gray-500">{item.title}</p>

              <h2 className="text-3xl font-bold text-gray-800">{item.value}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Purchased Books */}

      <section
        className="
bg-white
border
rounded-3xl
p-6
shadow-sm
"
      >
        <div
          className="
flex
justify-between
items-center
mb-6
"
        >
          <h2 className="text-xl font-bold">Recently Purchased</h2>

          <Link
            href="/dashboard/reader/history"
            className="
text-indigo-600
flex
gap-1
items-center
text-sm
"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        {purchasedBooks.length === 0 ? (
          <div
            className="
py-10
text-center
text-gray-500
"
          >
            <Clock className="mx-auto mb-3" />
            No purchased ebooks yet
          </div>
        ) : (
          <div
            className="
grid
md:grid-cols-3
gap-6
"
          >
            {purchasedBooks.slice(0, 3).map((item) => (
              <div
                key={item._id}
                className="
border
rounded-2xl
overflow-hidden
hover:shadow-xl
transition
duration-300
"
              >
                <img
                  src={item.book.coverImage}
                  alt={item.book.title}
                  className="
h-52
w-full
object-cover
"
                />

                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.book.title}</h3>

                  <p className="text-sm text-gray-500">
                    {item.book.writerName || "Unknown Writer"}
                  </p>

                  <div className="flex justify-between mt-4">
                    <span
                      className="
font-bold
text-green-600
"
                    >
                      ৳ {item.priceId}
                    </span>

                    <Link
                      href={`/books/${item.book._id}`}
                      className="
text-indigo-600
text-sm
"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bookmarks */}

      <section
        className="
bg-white
border
rounded-3xl
p-6
shadow-sm
"
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Your Bookmarks</h2>

          <Link
            href="/dashboard/reader/bookmark"
            className="text-indigo-600 text-sm"
          >
            See all
          </Link>
        </div>

        <div className="mt-5 text-gray-500 flex gap-3 items-center">
          <Bookmark size={18} />

          {bookmarks.length
            ? `${bookmarks.length} saved ebooks`
            : "No saved ebooks yet"}
        </div>
      </section>
    </div>
  );
};

export default ReaderHomePage;
