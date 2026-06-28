import { getUserSession, jwtToken } from "@/lib/core/session";
import { motion } from "motion/react";

import { getBooksById, getSalesHistory } from "@/lib/api/writers";
import { getBookmarkedBooksByUser } from "@/lib/api/books";

import WriterStats from "@/components/writer/WriterStats";
import AnimatedCard from "@/components/writer/AnimatedCard";

const WriterPage = async () => {
  const user = await getUserSession();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-500">
          Please login first
        </h1>
      </div>
    );
  }

  // get writer books
  const books = (await getBooksById(user.id)) || [];

  // get sales history
  const sales = (await getSalesHistory(user.id)) || [];

  // get bookmarks
  const bookmarks = (await getBookmarkedBooksByUser(user.id)) || [];

  return (
    <div className="p-6 space-y-10">
      {/* HERO SECTION */}

      <section
        className="
  relative
  overflow-hidden
  rounded-3xl
  border
  border-purple-100
  bg-gradient-to-br
  from-purple-100
  via-white
  to-pink-100
  p-8
  shadow-sm
  "
      >
        {/* background blur */}
        <div
          className="
    absolute
    -top-20
    -right-20
    h-60
    w-60
    rounded-full
    bg-purple-300
    opacity-20
    blur-3xl
    "
        />

        <div
          className="
    absolute
    -bottom-20
    -left-20
    h-60
    w-60
    rounded-full
    bg-pink-300
    opacity-20
    blur-3xl
    "
        />

        <div className="relative">
          <div
            className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-white/70
      border
      border-purple-100
      px-4
      py-1.5
      text-sm
      text-purple-700
      font-medium
      mb-5
      "
          >
            ✨ Writer Dashboard
          </div>

          <h1
            className="
      text-4xl
      md:text-5xl
      font-extrabold
      tracking-tight
      text-gray-900
      "
          >
            Welcome back,{" "}
            <span
              className="
        bg-gradient-to-r
        from-purple-600
        via-fuchsia-500
        to-pink-500
        bg-clip-text
        text-transparent
        "
            >
              {user.name}
            </span>
          </h1>

          <p
            className="
      mt-4
      max-w-3xl
      text-gray-600
      leading-relaxed
      text-base
      md:text-lg
      "
          >
            Manage your ebook library, track your sales, monitor reader
            engagement, and publish new content from your professional writer
            dashboard.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <AnimatedCard>
              <p className="text-xs text-gray-500">Status</p>

              <p className="font-semibold text-purple-600">Active Writer</p>
            </AnimatedCard>

            <AnimatedCard>
              <p className="text-xs text-gray-500">Platform</p>

              <p className="font-semibold text-gray-800">Novara Ebook</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section>
        <div
          className="
  mb-6
  rounded-2xl
  border
  border-purple-100
  bg-gradient-to-br
  from-purple-50
  via-white
  to-pink-50
  p-6
  shadow-sm
  "
        >
          <div className="flex items-center justify-between">
            <div>
              <h2
                className="
        text-2xl
        md:text-3xl
        font-extrabold
        text-gray-900
        tracking-tight
        "
              >
                Dashboard Overview
              </h2>

              <p
                className="
        mt-2
        text-gray-500
        text-sm
        md:text-base
        "
              >
                Track your writing performance, ebook activity, and audience
                growth.
              </p>
            </div>

            <div
              className="
      hidden
      md:flex
      h-12
      w-12
      rounded-xl
      bg-purple-100
      items-center
      justify-center
      text-2xl
      "
            >
              📊
            </div>
          </div>
        </div>

        <WriterStats books={books} sales={sales} bookmarks={bookmarks} />
      </section>

      {/* RECENT SALES */}

      <section
        className="
        bg-white
        border
        rounded-2xl
        p-6
        shadow-sm
        "
      >
        <h2
          className="
          text-xl
          font-bold
          mb-5
          "
        >
          Recent Sales
        </h2>

        {sales.length === 0 ? (
          <p className="text-gray-500">No sales found</p>
        ) : (
          <div className="space-y-4">
            {sales.slice(0, 5).map((sale) => (
              <div
                key={sale._id}
                className="
                    flex
                    justify-between
                    items-center
                    border-b
                    pb-3
                    "
              >
                <div>
                  <h3 className="font-semibold">{sale.name}</h3>

                  <p
                    className="
                        text-sm
                        text-gray-500
                        "
                  >
                    Buyer: {sale.userEmail}
                  </p>
                </div>

                <div
                  className="
                      font-bold
                      text-green-600
                      "
                >
                  ৳ {sale.priceId}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default WriterPage;
