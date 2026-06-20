import { getUserSession } from "@/lib/core/session";
import { FaBook, FaPlus, FaChartLine, FaBookmark } from "react-icons/fa";

const WriterPage = async () => {
  const user = await getUserSession();

  console.log(user);

  return (
    <div className="p-6 space-y-8">
      {/* HERO SECTION */}

      <section className="rounded-2xl border p-8 bg-gradient-to-r from-gray-50 to-white">
        <h1 className="text-4xl font-bold">
          Welcome back, {user?.name} 👋
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl">
          Manage your ebooks, publish new content, track your sales, and grow
          your digital library from your writer dashboard.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            className="
            flex items-center gap-2
            px-5 py-3 rounded-xl
            bg-black text-white
            hover:opacity-90
            "
          >
            <FaPlus />
            Add New Ebook
          </button>

          <button
            className="
            flex items-center gap-2
            px-5 py-3 rounded-xl
            border
            "
          >
            <FaBook />
            Manage Books
          </button>
        </div>
      </section>

      {/* QUICK OVERVIEW */}

      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Overview</h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-xl border p-5">
            <div className="flex items-center gap-3">
              <FaBook className="text-xl" />

              <p className="text-gray-500">Total Ebooks</p>
            </div>

            <h3 className="text-3xl font-bold mt-3">0</h3>
          </div>

          <div className="rounded-xl border p-5">
            <div className="flex items-center gap-3">
              <FaChartLine className="text-xl" />

              <p className="text-gray-500">Total Sales</p>
            </div>

            <h3 className="text-3xl font-bold mt-3">0</h3>
          </div>

          <div className="rounded-xl border p-5">
            <div className="flex items-center gap-3">
              <FaBookmark className="text-xl" />

              <p className="text-gray-500">Bookmarks</p>
            </div>

            <h3 className="text-3xl font-bold mt-3">0</h3>
          </div>
        </div>
      </section>

      {/* WRITER INFO */}

      <section className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Writer Profile</h2>

        <div className="mt-4 space-y-2 text-gray-600">
          <p>Name: {user?.name}</p>

          <p>Email: {user?.email}</p>

          <p>Role: Writer</p>
        </div>
      </section>
    </div>
  );
};

export default WriterPage;
