import WriterBookTable from "@/components/writer/WriterBookTable";
import { getBooksById } from "@/lib/api/writers";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";

const WritersManageBooks = async () => {
  const user = await getUserSession();
  const id = user?.id;

  const books = await getBooksById(id);

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

            <Link href='/dashboard/writer/add-book' className="mt-6 px-6 py-2 bg-black text-white rounded-xl">
              Create Your First Ebook
            </Link>
          </div>
        )}

        {totalBooks > 0 && (
          <>
            {/* HEADER */}

            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Manage Ebooks</h1>

                <p className="text-gray-500 mt-2 max-w-xl">
                  View and manage all your ebooks. Edit book details, update
                  publishing status, and control your ebook collection from
                  here.
                </p>
              </div>
            </div>

            {/* PART 1: STATS */}
            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-xl border p-5">
                <p className="text-sm text-gray-500">Total Ebooks</p>
                <h2 className="text-3xl font-bold mt-2">{totalBooks}</h2>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-sm text-gray-500">Published</p>
                <h2 className="text-3xl font-bold mt-2">{publishedBooks}</h2>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-sm text-gray-500">Unpublished</p>
                <h2 className="text-3xl font-bold mt-2">{unpublishedBooks}</h2>
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
