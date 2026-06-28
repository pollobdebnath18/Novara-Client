import { getUserSession } from "@/lib/core/session";
import { getAllPurchasedBooks, getPurchaseHistory } from "@/lib/api/reader";
import { ShoppingBag } from "lucide-react";

const HistoryPage = async () => {
  const user = await getUserSession();

  const purchases = (await getAllPurchasedBooks(user?.id)) || [];

  return (
    <div className=" space-y-8 mx-6 my-5">
      {/* HEADER */}
      <div
        className="
  bg-gradient-to-r
  from-purple-50
  via-white
  to-blue-50
  border
  rounded-3xl
  p-8
  shadow-sm
  "
      >
        <div className="flex items-center gap-4">
          <div
            className="
      w-14
      h-14
      rounded-2xl
      bg-purple-100
      flex
      items-center
      justify-center
      shadow-inner
      "
          >
            <ShoppingBag size={28} className="text-purple-600" />
          </div>

          <div>
            <h1
              className="
        text-3xl
        md:text-4xl
        font-extrabold
        text-gray-800
        tracking-tight
        "
            >
              Purchase History
            </h1>

            <p
              className="
        mt-2
        text-gray-500
        text-sm
        md:text-base
        "
            >
              Review your purchased ebooks, transactions, and digital library
              activity.
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
    px-4
    py-2
    rounded-full
    bg-white
    border
    text-sm
    text-gray-600
    shadow-sm
    "
        >
          📚 Your purchased ebooks are always available here
        </div>
      </div>

      {/* TABLE */}

      <div
        className="
        bg-white
        border
        rounded-3xl
        shadow-sm
        overflow-hidden
        "
      >
        <table className="w-full">
          <thead
            className="
            bg-gray-50
            text-gray-600
            "
          >
            <tr>
              <th className="px-6 py-4 text-left">Ebook</th>

              <th className="px-6 py-4 text-left">Writer</th>

              <th className="px-6 py-4 text-left">Price</th>

              <th className="px-6 py-4 text-left">Purchase Date</th>

              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {purchases.map((item) => (
              <tr
                key={item._id}
                className="
              border-t
              hover:bg-gray-50
              transition
              "
              >
                {/* BOOK */}

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.book?.coverImage}
                      alt={item.book?.title}
                      className="
                    w-12
                    h-16
                    rounded-lg
                    object-cover
                    shadow
                    "
                    />

                    <div>
                      <p className="font-semibold text-gray-800">
                        {item.book?.title}
                      </p>

                      <p className="text-sm text-gray-400">
                        {item.book?.genre}
                      </p>
                    </div>
                  </div>
                </td>

                {/* WRITER */}

                <td className="px-6 py-4 text-gray-600">
                  {item.book?.writerName || "Unknown"}
                </td>

                {/* PRICE */}

                <td className="px-6 py-4">
                  <span
                    className="
                  font-bold
                  text-green-600
                  "
                  >
                    ৳ {item.priceId}
                  </span>
                </td>

                {/* DATE */}

                <td className="px-6 py-4 text-gray-500">
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>

                {/* STATUS */}

                <td className="px-6 py-4">
                  <span
                    className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  bg-green-100
                  text-green-700
                  "
                  >
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {purchases.length === 0 && (
          <div
            className="
            py-16
            text-center
            text-gray-500
            "
          >
            No purchase history found
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
