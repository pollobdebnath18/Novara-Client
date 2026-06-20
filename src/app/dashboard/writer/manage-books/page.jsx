import WriterBookTable from "@/components/writer/WriterBookTable";
import { getBooksById } from "@/lib/api/writers";
import { getUserSession } from "@/lib/core/session";

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
      {/* HEADER */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Ebooks</h1>

          <p className="text-gray-500 mt-2 max-w-xl">
            View and manage all your ebooks. Edit book details, update
            publishing status, and control your ebook collection from here.
          </p>
        </div>
      </div>

      {/* STATS */}

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

      {/* TABLE SECTION */}

      <div className="rounded-2xl border p-5">
        <div className="mb-5">
          <h2 className="text-xl font-semibold">Your Ebook List</h2>

          <p className="text-sm text-gray-500">
            Manage titles, prices, visibility and publishing actions.
          </p>
        </div>

        <WriterBookTable books={books} />
        
      </div>
    </div>
  );
};

export default WritersManageBooks;
