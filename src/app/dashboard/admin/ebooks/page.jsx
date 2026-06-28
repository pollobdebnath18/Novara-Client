import ManageAllEbooksTable from "@/components/admin/ManageAllEbooksTable";
import { getAllBooks } from "@/lib/api/admin";

export default async function ManageAllEbooksPage() {
  const ebooks = await getAllBooks();
  // console.log(ebooks);

  return (
    <div className="space-y-8 p-4 md:p-6">
      {/* HEADER */}

      {/* HEADER */}

      <div
        className="
  relative
  overflow-hidden
  rounded-3xl
  bg-gradient-to-br
  from-slate-950
  via-slate-900
  to-blue-900
  p-8
  text-white
  shadow-xl
  "
      >
        {/* Glow */}

        <div
          className="
    absolute
    -top-20
    -right-20
    w-72
    h-72
    rounded-full
    bg-blue-500/20
    blur-3xl
    "
        />

        <div
          className="
    absolute
    -bottom-20
    -left-20
    w-72
    h-72
    rounded-full
    bg-cyan-400/10
    blur-3xl
    "
        />

        {/* Content */}

        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <div
              className="
        w-14
        h-14
        rounded-2xl
        bg-white/10
        border
        border-white/20
        backdrop-blur-md
        flex
        items-center
        justify-center
        shadow-inner
        text-2xl
        "
            >
              📚
            </div>

            <div>
              <h1
                className="
          text-3xl
          md:text-4xl
          font-extrabold
          tracking-tight
          "
              >
                Manage All Ebooks
              </h1>

              <p
                className="
          mt-2
          text-gray-300
          text-sm
          md:text-base
          "
              >
                Control publishing status, pricing, and ebook availability.
              </p>
            </div>
          </div>

          <div
            className="
      mt-6
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-white/10
      border
      border-white/20
      backdrop-blur-md
      px-4
      py-2
      text-sm
      text-gray-200
      "
          >
            ✅ Publish approved ebooks & manage visibility
          </div>
        </div>
      </div>

      {/* TABLE CARD */}

      <div
        className="
  rounded-3xl
  bg-white
  dark:bg-gray-900
  border
  shadow-lg
  overflow-hidden
  "
      >
        <div
          className="
    p-6
    border-b
    bg-gradient-to-r
    from-gray-50
    via-white
    to-indigo-50
    dark:from-gray-900
    dark:via-gray-900
    dark:to-gray-800
    "
        >
          <div className="flex items-center justify-between">
            <div>
              <h2
                className="
          text-xl
          md:text-2xl
          font-bold
          text-gray-800
          dark:text-white
          "
              >
                Ebook List
                <span
                  className="
            ml-2
            text-sm
            px-3
            py-1
            rounded-full
            bg-indigo-100
            text-indigo-700
            font-semibold
            "
                >
                  {ebooks.length}
                </span>
              </h2>

              <p
                className="
          mt-2
          text-sm
          text-gray-500
          "
              >
                Manage publishing status, update visibility, or remove ebooks.
              </p>
            </div>

            <div
              className="
        hidden
        md:flex
        items-center
        gap-2
        px-4
        py-2
        rounded-xl
        bg-green-50
        text-green-700
        text-sm
        font-medium
        "
            >
              📚 Total Books: {ebooks.length}
            </div>
          </div>
        </div>
        <div className="p-5">
          <ManageAllEbooksTable ebooks={ebooks} />
        </div>
      </div>
    </div>
  );
}
