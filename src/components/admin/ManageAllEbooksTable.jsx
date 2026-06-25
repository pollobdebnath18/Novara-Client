"use client";

import { Button } from "@heroui/react";
import { Trash2, Eye, Upload, Ban } from "lucide-react";
import { useRouter } from "next/navigation";
import { DeleteBookModal } from "./DeleteBookModal";
import { bookStatusChanged } from "@/lib/actions/admin";

export default function ManageAllEbooksTable({ ebooks }) {
  const router = useRouter();

  console.log(ebooks , 'ebooks from manage all ebooks table')

  const changeStatus = async (id, status) => {
    const res = await bookStatusChanged(id, {status}, "PATCH");

    router.refresh();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead
          className="
  bg-gradient-to-r
  from-indigo-50
  via-purple-50
  to-pink-50
  dark:from-gray-800
  dark:via-gray-800
  dark:to-gray-900
  "
        >
          <tr>
            <th
              className="
      px-6
      py-4
      text-left
      text-xs
      font-bold
      uppercase
      tracking-wider
      text-gray-600
      dark:text-gray-300
      "
            >
              Ebook
            </th>

            <th
              className="
      px-6
      py-4
      text-left
      text-xs
      font-bold
      uppercase
      tracking-wider
      text-gray-600
      dark:text-gray-300
      "
            >
              Writer
            </th>

            <th
              className="
      px-6
      py-4
      text-left
      text-xs
      font-bold
      uppercase
      tracking-wider
      text-gray-600
      dark:text-gray-300
      "
            >
              Price
            </th>

            <th
              className="
      px-6
      py-4
      text-left
      text-xs
      font-bold
      uppercase
      tracking-wider
      text-gray-600
      dark:text-gray-300
      "
            >
              Status
            </th>

            <th
              className="
      px-6
      py-4
      text-left
      text-xs
      font-bold
      uppercase
      tracking-wider
      text-gray-600
      dark:text-gray-300
      "
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {ebooks.map((book) => (
            <tr
              key={book._id}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={book.coverImage}
                    className="
 w-12 h-14
 rounded-lg
 object-cover
 "
                  />

                  <div className="space-y-1">
                    <p
                      className="
    font-semibold
    text-gray-800
    dark:text-white
    line-clamp-1
    hover:text-indigo-600
    transition
    "
                    >
                      {book.title}
                    </p>

                    <div
                      className="
    inline-flex
    items-center
    gap-2
    "
                    >
                      <span
                        className="
      px-2
      py-0.5
      rounded-full
      bg-indigo-50
      text-indigo-600
      text-xs
      font-medium
      "
                      >
                        {book.genre}
                      </span>
                    </div>
                  </div>
                </div>
              </td>

              <td className="p-4">{book.writerName}</td>

              <td className="px-6 py-5">
                <span
                  className="
    inline-flex
    items-center
    gap-1
    px-3
    py-1.5
    rounded-xl
    bg-green-50
    text-yellow-700
    font-bold
    text-sm
    ring-1
    ring-green-200
    "
                >
                  ৳ {book.price}
                </span>
              </td>

              <td className="p-4">
                <span
                  className={`
 px-3 py-1
 rounded-full
 text-xs
 font-medium

 ${
   book.status === "published"
     ? "bg-green-100 text-green-700"
     : "bg-yellow-100 text-yellow-700"
 }

 `}
                >
                  {book.status}
                </span>
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  {book.status === "published" ? (
                    <Button
                      size="sm"
                      color="warning"
                      className="text-red-600 bg-red-50 hover:bg-red-100 w-28"
                      onPress={() => changeStatus(book._id, "unpublish")}
                    >
                      <Ban size={16} />
                      Unpublish
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      color="success"
                      className="text-green-600 bg-green-50 hover:bg-green-100 w-28"
                      onPress={() => changeStatus(book._id, "published")}
                    >
                      <Upload size={16} />
                      Published
                    </Button>
                  )}

                  <DeleteBookModal book={book}></DeleteBookModal>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
