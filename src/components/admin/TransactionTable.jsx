"use client";

import { CreditCard, CalendarDays } from "lucide-react";

export default function TransactionTable({ transactions }) {
  return (
    <div className="overflow-x-auto p-5">
      <table className="w-full text-sm">
        <thead>
          <tr
            className="
bg-gray-100
text-gray-600
uppercase
text-xs
"
          >
            <th className="p-4 text-left">Transaction ID</th>

            <th className="p-4 text-left">User Email</th>

            <th className="p-4 text-left">Type</th>

            <th className="p-4 text-left">Amount</th>

            <th className="p-4 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr
              key={item._id}
              className="
border-b
hover:bg-gray-50
transition
"
            >
              {/* ID */}

              <td className="p-4">
                <div
                  className="
flex
items-center
gap-2
"
                >
                  <div
                    className="
h-9
w-9
rounded-full
bg-indigo-100
flex
items-center
justify-center
"
                  >
                    <CreditCard size={17} className="text-indigo-600" />
                  </div>

                  <span className="font-medium text-gray-700">
                    {item._id.slice(-8)}
                  </span>
                </div>
              </td>

              {/* EMAIL */}

              <td className="p-4">
                <p className="font-medium">{item.userEmail}</p>

                <p className="text-xs text-gray-400">
                  User ID: {item.userId.slice(-6)}
                </p>
              </td>

              {/* TYPE */}

              <td className="p-4">
                <span
                  className="
px-3
py-1
rounded-full
text-xs
font-semibold
bg-blue-100
text-blue-700
"
                >
                  Purchase
                </span>
              </td>

              {/* PRICE */}

              <td className="p-4">
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

              <td className="p-4">
                <div
                  className="
flex
items-center
gap-2
text-gray-500
"
                >
                  <CalendarDays size={16} />

                  {new Date(item.purchaseDate).toLocaleDateString()}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
