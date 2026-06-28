import WriterBookTable from "@/components/writer/WriterBookTable";
import { getBooksById } from "@/lib/api/writers";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";

const WritersManageBooks = async () => {
  const user = await getUserSession();
  const id = user?.id;

  const books = await getBooksById(id);
  console.log(books);

  const totalBooks = books?.length || 0;

  const publishedBooks =
    books?.filter((book) => book.status === "published").length || 0;

  const unpublishedBooks =
    books?.filter((book) => book.status === "unpublish").length || 0;

  return (
    <div className="p-6 space-y-8">
      <div>
        {totalBooks === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl">📚</div>

            <h2 className="text-2xl font-bold mt-4">No Ebooks Yet</h2>

            <p className="text-gray-500 mt-2 max-w-md">
              You haven’t created any ebooks yet. Start building your collection
              by publishing your first ebook.
            </p>

            <Link
              href="/dashboard/writer/add-book"
              className="mt-6 px-6 py-2 bg-black text-white rounded-xl"
            >
              Create Your First Ebook
            </Link>
          </div>
        )}

        {totalBooks > 0 && (
          <>
            {/* HEADER */}

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
                  <h1
                    className="
        text-3xl
        md:text-4xl
        font-extrabold
        tracking-tight
        text-gray-900
        "
                  >
                    Manage Ebooks
                  </h1>

                  <p
                    className="
        mt-3
        text-gray-500
        max-w-xl
        leading-relaxed
        "
                  >
                    View and manage your ebook collection. Update book details,
                    control publishing status, and keep your digital library
                    organized.
                  </p>
                </div>

                <div
                  className="
      hidden
      md:flex
      h-14
      w-14
      rounded-2xl
      bg-purple-100
      items-center
      justify-center
      text-3xl
      "
                >
                  📚
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid md:grid-cols-3 gap-5">
              {/* Total */}
              <div
                className="
    group
    rounded-2xl
    border
    bg-white
    p-6
    shadow-sm
    hover:shadow-lg
    hover:-translate-y-1
    transition-all
    duration-300
    "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Ebooks</p>

                    <h2 className="text-4xl font-black text-gray-900 mt-3">
                      {totalBooks}
                    </h2>
                  </div>

                  <div
                    className="
        h-12
        w-12
        rounded-xl
        bg-purple-100
        flex
        items-center
        justify-center
        text-2xl
        "
                  >
                    📚
                  </div>
                </div>
              </div>

              {/* Published */}
              <div
                className="
    group
    rounded-2xl
    border
    bg-white
    p-6
    shadow-sm
    hover:shadow-lg
    hover:-translate-y-1
    transition-all
    duration-300
    "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Published</p>

                    <h2 className="text-4xl font-black text-gray-900 mt-3">
                      {publishedBooks}
                    </h2>
                  </div>

                  <div
                    className="
        h-12
        w-12
        rounded-xl
        bg-green-100
        flex
        items-center
        justify-center
        text-2xl
        "
                  >
                    ✅
                  </div>
                </div>
              </div>

              {/* Unpublished */}
              <div
                className="
    group
    rounded-2xl
    border
    bg-white
    p-6
    shadow-sm
    hover:shadow-lg
    hover:-translate-y-1
    transition-all
    duration-300
    "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Unpublished</p>

                    <h2 className="text-4xl font-black text-gray-900 mt-3">
                      {unpublishedBooks}
                    </h2>
                  </div>

                  <div
                    className="
        h-12
        w-12
        rounded-xl
        bg-orange-100
        flex
        items-center
        justify-center
        text-2xl
        "
                  >
                    📝
                  </div>
                </div>
              </div>
            </div>

            {/* PART 2: TABLE */}
            <div className="rounded-2xl border p-5 mt-6">
              <div className="mb-5">
                <h2 className="text-xl font-semibold">Your Ebook List</h2>
                <p className="text-sm text-gray-500">
                  Manage titles, prices, visibility and publishing actions.
                </p>
              </div>

              <WriterBookTable books={books} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WritersManageBooks;
