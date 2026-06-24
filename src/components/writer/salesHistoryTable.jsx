import { BookOpen, CalendarDays, User, DollarSign } from "lucide-react";

const SalesHistoryTable = ({ sales }) => {
  const revenue = sales.reduce((sum, item) => sum + Number(item.priceId), 0);

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="bg-white border rounded-3xl p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="
        text-4xl
        font-bold
        text-gray-900
        tracking-tight
      "
            >
              Sales & Revenue Overview
            </h1>

            <p
              className="
        mt-3
        text-gray-500
        max-w-2xl
        leading-relaxed
      "
            >
              Track your ebook performance, monitor customer purchases, and
              analyze your earnings. View all successful transactions, buyer
              information, and sales history in one place.
            </p>

            <div
              className="
        mt-5
        flex
        gap-3
        text-sm
      "
            >
              <span
                className="
          bg-green-100
          text-green-700
          px-4
          py-2
          rounded-full
          font-medium
        "
              >
                ✓ Payments Completed
              </span>

              <span
                className="
          bg-blue-100
          text-blue-700
          px-4
          py-2
          rounded-full
          font-medium
        "
              >
                Ebook Marketplace
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-5">
        <div
          className="
          bg-white
          border
          rounded-2xl
          p-5
          shadow-sm
        "
        >
          <p className="text-gray-500">Total Sales</p>

          <h2 className="text-3xl font-bold">{sales.length}</h2>
        </div>

        <div
          className="
          bg-white
          border
          rounded-2xl
          p-5
          shadow-sm
        "
        >
          <p className="text-gray-500">Revenue</p>

          <h2 className="text-3xl font-bold">৳ {revenue}</h2>
        </div>

        <div
          className="
          bg-white
          border
          rounded-2xl
          p-5
          shadow-sm
        "
        >
          <p className="text-gray-500">Buyers</p>

          <h2 className="text-3xl font-bold">
            {new Set(sales.map((item) => item.userEmail)).size}
          </h2>
        </div>
      </div>

      {/* Table */}

      <div
        className="
        bg-white
        rounded-2xl
        border
        overflow-hidden
      "
      >
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Ebook</th>

              <th className="p-4 text-left">Buyer</th>

              <th className="p-4 text-left">Date</th>

              <th className="p-4 text-left">Amount</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr key={sale._id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <div className="flex gap-2 items-center">
                    <BookOpen size={18} />

                    {sale.name}
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex gap-2 items-center">
                    <User size={18} />

                    {sale.userEmail}
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex gap-2 items-center">
                    <CalendarDays size={18} />

                    {new Date(sale.purchaseDate).toLocaleDateString()}
                  </div>
                </td>

                <td className="p-4">
                  <span
                    className="
                    bg-green-100
                    text-green-700
                    px-3
                    py-1
                    rounded-full
                  "
                  >
                    ৳ {sale.priceId}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesHistoryTable;
