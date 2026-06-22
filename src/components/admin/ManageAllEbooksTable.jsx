"use client";

import { Button } from "@heroui/react";
import { Trash2, Eye, Upload, Ban } from "lucide-react";
import { useRouter } from "next/navigation";
import { DeleteBookModal } from "./DeleteBookModal";
import { bookStatusChanged } from "@/lib/actions/admin";

export default function ManageAllEbooksTable({ ebooks }) {
  const router = useRouter();

  const changeStatus = async (id, status) => {
    const res = await bookStatusChanged(id, {status}, "PATCH");

    router.refresh();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="p-4 text-left">Title</th>

            <th className="p-4 text-left">Writer</th>

            <th className="p-4 text-left">Price</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-left">Action</th>
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

                  <div>
                    <p className="font-semibold">{book.title}</p>

                    <p className="text-xs text-gray-500">{book.genre}</p>
                  </div>
                </div>
              </td>

              <td className="p-4">{book.writerName}</td>

              <td className="p-4 font-semibold">${book.price}</td>

              <td className="p-4">
                <span
                  className={`
 px-3 py-1
 rounded-full
 text-xs
 font-medium

 ${
   book.status === "publish"
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
                  {book.status === "publish" ? (
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
                      onPress={() => changeStatus(book._id, "publish")}
                    >
                      <Upload size={16} />
                      Publish
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
