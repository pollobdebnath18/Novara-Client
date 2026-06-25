import { getUserSession, jwtToken } from "@/lib/core/session";

import { getBooksById, getSalesHistory } from "@/lib/api/writers";
import { getBookmarkedBooksByUser } from "@/lib/api/books";

import WriterStats from "@/components/writer/WriterStats";
import { getTokenServer } from "@/lib/token";

const WriterPage = async () => {
  const user = await getUserSession();

  // const token = await jwtToken();
  // console.log(token);

  const token = await getTokenServer();
  console.log(token ,' this create now');

 

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
        rounded-3xl
        border
        bg-gradient-to-r
        from-purple-50
        via-white
        to-pink-50
        p-8
        shadow-sm
        "
      >
        <h1
          className="
          text-4xl
          font-bold
          text-gray-800
          "
        >
          Welcome back, {user.name} 👋
        </h1>

        <p
          className="
          mt-3
          text-gray-500
          max-w-3xl
          "
        >
          Manage your ebook library, track your sales, monitor reader engagement
          and publish new content from your writer dashboard.
        </p>
      </section>

      {/* STATS */}

      <section>
        <div className="mb-5">
          <h2
            className="
            text-2xl
            font-bold
            text-gray-800
            "
          >
            Dashboard Overview
          </h2>

          <p className="text-gray-500 mt-1">Your writing performance summary</p>
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
