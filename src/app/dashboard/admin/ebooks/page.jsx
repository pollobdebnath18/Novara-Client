import { getAllBooks } from "@/lib/api/books";
import ManageAllEbooksTable from "@/components/admin/ManageAllEbooksTable";

export default async function ManageAllEbooksPage() {
  const ebooks = await getAllBooks();

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div
        className="
        rounded-3xl
        bg-gradient-to-r 
        from-indigo-600 
        via-purple-600 
        to-pink-600
        p-8
        text-white
        shadow-lg
        "
      >
        <h1 className="text-3xl font-bold">Manage All Ebooks</h1>

        <p className="mt-2 text-white/80">
          Manage ebook publishing status, pricing and availability.
        </p>
      </div>

      {/* TABLE CARD */}

      <div
        className="
        rounded-3xl
        bg-white
        dark:bg-gray-900
        border
        shadow-sm
        overflow-hidden
        "
      >
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Ebook List</h2>

          <p className="text-sm text-gray-500">
            Publish, unpublish or remove ebooks.
          </p>
        </div>

        <div className="p-5">
          <ManageAllEbooksTable ebooks={ebooks} />
        </div>
      </div>
    </div>
  );
}
