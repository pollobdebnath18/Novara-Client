import ManageAllEbooksTable from "@/components/admin/ManageAllEbooksTable";
import { getAllBooks } from "@/lib/api/admin";

export default async function ManageAllEbooksPage() {
  const ebooks = await getAllBooks();
  console.log(ebooks);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div
        className="
  relative
  overflow-hidden
  rounded-3xl
  bg-gradient-to-br
  from-indigo-700
  via-purple-700
  to-pink-600
  p-8
  text-white
  shadow-xl
  "
      >
        {/* Background blur shapes */}
        <div
          className="
    absolute
    -top-10
    -right-10
    w-40
    h-40
    rounded-full
    bg-white/20
    blur-3xl
    "
        />

        <div
          className="
    absolute
    bottom-0
    left-20
    w-32
    h-32
    rounded-full
    bg-pink-300/20
    blur-2xl
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
        bg-white/20
        backdrop-blur
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
          text-white/80
          text-sm
          md:text-base
          "
              >
                Control publishing status, pricing, and ebook availability.
              </p>
            </div>
          </div>

          {/* Info badge */}
          <div
            className="
      mt-6
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-white/15
      backdrop-blur
      px-4
      py-2
      text-sm
      shadow
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
