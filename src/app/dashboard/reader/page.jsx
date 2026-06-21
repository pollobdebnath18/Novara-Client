import React from "react";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";

import {
  BookOpen,
  Bookmark,
  ShoppingBag,
  User,
  ArrowRight,
  Clock,
} from "lucide-react";

const ReaderHomePage = async () => {
  const user = await getUserSession();

  const stats = [
    {
      title: "Purchased Books",
      value: "24",
      icon: <BookOpen size={22} />,
      link: "/dashboard/user/purchased",
    },

    {
      title: "Purchase History",
      value: "36",
      icon: <ShoppingBag size={22} />,
      link: "/dashboard/user/history",
    },

    {
      title: "Bookmarks",
      value: "12",
      icon: <Bookmark size={22} />,
      link: "/dashboard/user/bookmarks",
    },

    {
      title: "Profile",
      value: "Manage",
      icon: <User size={22} />,
      link: "/dashboard/user/profile",
    },
  ];

  const books = [
    {
      title: "Padma Nadir Majhi",
      writer: "Manik Bandopadhyay",
      price: "$12",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    },

    {
      title: "The Alchemist",
      writer: "Paulo Coelho",
      price: "$15",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },

    {
      title: "Atomic Habits",
      writer: "James Clear",
      price: "$18",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}

      <section
        className="
rounded-3xl
p-8
bg-gradient-to-r
from-indigo-600
via-purple-600
to-pink-500
text-white
flex
justify-between
items-center
"
      >
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name} 👋</h1>

          <p className="mt-3 text-white/80">
            Continue reading your favorite ebooks and explore new stories.
          </p>
        </div>

        <div className="hidden md:block">
          <div
            className="
h-20
w-20
rounded-full
bg-white/20
flex
items-center
justify-center
text-3xl
"
          >
            {user?.name?.charAt(0)}
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
hover:shadow-lg
transition
flex
items-center
gap-4
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

              <h2 className="text-2xl font-bold">{item.value}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Purchased */}

      <section
        className="
bg-white
border
rounded-3xl
p-6
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
            href="/dashboard/user/purchased"
            className="
text-indigo-600
flex
items-center
gap-1
text-sm
"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          className="
grid
md:grid-cols-3
gap-6
"
        >
          {books.map((book, index) => (
            <div
              key={index}
              className="
border
rounded-2xl
overflow-hidden
hover:shadow-xl
transition
"
            >
              <img
                src={book.image}
                alt={book.title}
                className="
h-52
w-full
object-cover
"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{book.title}</h3>

                <p className="text-sm text-gray-500">{book.writer}</p>

                <div
                  className="
flex
justify-between
items-center
mt-4
"
                >
                  <span className="font-semibold">{book.price}</span>

                  <Link
                    href={`/ebook/${index}`}
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
      </section>

      {/* Bookmark Section */}

      <section
        className="
bg-white
border
rounded-3xl
p-6
"
      >
        <div
          className="
flex
justify-between
items-center
"
        >
          <h2 className="text-xl font-bold">Your Bookmarks</h2>

          <Link
            href="/dashboard/user/bookmarks"
            className="text-indigo-600 text-sm"
          >
            See all
          </Link>
        </div>

        <div
          className="
mt-5
flex
items-center
gap-3
text-gray-500
"
        >
          <Clock size={18} />

          <p>Your saved ebooks will appear here.</p>
        </div>
      </section>
    </div>
  );
};

export default ReaderHomePage;
