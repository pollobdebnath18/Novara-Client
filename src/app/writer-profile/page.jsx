import React from "react";
import Image from "next/image";
import User from "@/image/user.png";
import { getBooksForWriterProfilePage } from "@/lib/api/writers";
import { Table } from "@heroui/react";
import { BookX } from "lucide-react";
import { getUserSession } from "@/lib/core/session";

const WriterProfilePage = async () => {
  const user = await getUserSession();

  const books = await getBooksForWriterProfilePage(user?.id);
  //   console.log(books);
  const bookList = books?.filter((book) => book.status === "published") || [];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-500">
          You are not logged in
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className=" bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-6 ">
        <div
          className="
  w-full
  max-w-3xl
  bg-white
  rounded-3xl
  border
  border-gray-200
  shadow-lg
  overflow-hidden
  "
        >
          {/* PROFESSIONAL TOP BAR */}
          <div
            className="
    h-3
    bg-indigo-600
    "
          />

          <div className="p-8">
            {/* PROFILE HEADER */}
            <div className="flex items-center gap-5">
              {/* IMAGE */}
              <div
                className="
        h-24
        w-24
        rounded-2xl
        overflow-hidden
        border
        border-gray-200
        shadow-sm
        "
              >
                <Image
                  src={user?.image || User}
                  alt="profile"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* INFO */}
              <div>
                <h1
                  className="
          text-2xl
          font-bold
          text-gray-900
          "
                >
                  {user.name}
                </h1>

                <p
                  className="
          text-gray-500
          mt-1
          "
                >
                  {user.email}
                </p>

                <span
                  className="
          inline-flex
          mt-3
          px-3
          py-1
          rounded-lg
          bg-indigo-50
          text-indigo-600
          text-sm
          font-semibold
          "
                >
                  {user.role || "Reader"}
                </span>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="my-7 border-t" />

            {/* DETAILS */}
            <div
              className="
      grid
      md:grid-cols-2
      gap-4
      "
            >
              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-xs text-gray-500">User ID</p>

                <p className="font-medium text-gray-800 truncate">{user.id}</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-xs text-gray-500">Email Status</p>

                <p className="font-medium text-green-600">
                  {user.emailVerified ? "Verified" : "Pending"}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-xs text-gray-500">Account Role</p>

                <p className="font-semibold text-indigo-600">{user.role}</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-xs text-gray-500">Joined</p>

                <p className="font-medium">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WRITER BOOKS SECTION */}
      {/* BOOK SECTION */}

      {/* BOOK SECTION */}
      <div className="w-full max-w-4xl mt-10 mx-auto mb-12">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Published Books
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Explore books published by this writer and discover available
              ebooks.
            </p>
          </div>

          <span
            className="
      px-4 py-2
      rounded-full
      bg-indigo-100
      text-indigo-700
      font-semibold
      "
          >
            {bookList.length} Books
          </span>
        </div>

        {bookList.length === 0 ? (
          <div
            className="
      p-10
      text-center
      border
      rounded-3xl
      bg-gray-50
      "
          >
            <BookX className="mx-auto text-gray-400" size={40} />

            <h2 className="text-xl font-bold mt-3">No Books Found</h2>

            <p className="text-gray-500">No books available here.</p>
          </div>
        ) : (
          <div
            className="
      bg-white
      border
      rounded-3xl
      shadow-sm
      overflow-hidden
      "
          >
            <table className="w-full text-sm">
              <thead
                className="
          bg-gray-50
          border-b
          "
              >
                <tr>
                  {/* SERIAL */}

                  <th className="p-5 text-left">#</th>

                  <th className="p-5 text-left">Book</th>

                  <th className="p-5 text-left">Genre</th>

                  <th className="p-5 text-left">Price</th>

                  <th className="p-5 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {bookList.map((book, index) => (
                  <tr
                    key={book._id}
                    className="
              border-b
              hover:bg-gray-50
              transition
              "
                  >
                    {/* SERIAL NUMBER */}

                    <td
                      className="
                p-5
                font-semibold 
                text-gray-400
                "
                    >
                      {index + 1}
                    </td>

                    {/* BOOK */}

                    <td className="p-5">
                      <div
                        className="
                  flex
                  items-center
                  gap-4
                  "
                      >
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="
                    w-14
                    h-16
                    rounded-xl
                    object-cover
                    shadow
                    "
                        />

                        <div>
                          <p
                            className="
                      font-semibold
                      text-gray-800
                      "
                          >
                            {book.title}
                          </p>

                          <p
                            className="
                      text-xs
                      text-gray-500
                      "
                          >
                            {book.writerName}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* GENRE */}

                    <td
                      className="
                p-5
                text-gray-600
                "
                    >
                      {book.genre}
                    </td>

                    {/* PRICE */}

                    <td
                      className="
                p-5
                font-semibold
                text-indigo-600
                "
                    >
                      ${book.price}
                    </td>

                    {/* STATUS */}

                    <td className="p-5">
                      <span
                        className={`

                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold


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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default WriterProfilePage;
