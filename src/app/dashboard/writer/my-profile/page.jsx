import React from "react";
import Image from "next/image";
import { auth } from "@/lib/auth"; // server-side auth
import { headers } from "next/headers";
import User from "@/image/user.png";
import { getBooksById } from "@/lib/api/writers";
import { Table } from "@heroui/react";
import { BookX } from "lucide-react";
import EditProfileModal from "@/components/shared/profile/EditProfileModal";
import { getUserSession } from "@/lib/core/session";

const ProfilePage = async () => {
 
  const user = await getUserSession();
  // console.log(user , 'writer profile page');

  const books = await getBooksById(user?.id);
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
      <div className=" bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-6">
        <div className="w-full max-w-2xl bg-white border rounded-2xl shadow-xl p-6 my-8">
          {/* HEADER */}
          <div className="flex items-center gap-5">
            {/* IMAGE */}
            <div className="h-20 w-20 rounded-full overflow-hidden border shadow-md">
              <Image
                src={user?.image || User}
                alt="profile"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            {/* BASIC INFO */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-500">{user.email}</p>

              {/* ROLE BADGE */}
              <span
                className="
              inline-block mt-2 px-3 py-1 text-sm rounded-full
              bg-purple-100 text-purple-700 font-medium
            "
              >
                {user.role || "Reader"}
              </span>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-6 border-t" />

          {/* DETAILS SECTION */}
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="text-gray-500">User ID</span>
              <span>{user.id}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Email Verified</span>
              <span>{user.emailVerified ? "Yes" : "No"}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Account Role</span>
              <span className="font-medium text-purple-600">{user.role}</span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex gap-3">
            {/* <button
              className="
            px-4 py-2 rounded-lg
            bg-purple-600 text-white
            hover:bg-purple-700
            transition
          "
            >
              Edit Profile
            </button> */}
            <EditProfileModal user={user} />

            <button
              className="
            px-4 py-2 rounded-lg
            border
            hover:bg-gray-50
            transition
          "
            >
              Settings
            </button>
          </div>
        </div>
      </div>
      {/* WRITER BOOKS SECTION */}
      <div className="w-full max-w-4xl mt-10 mx-4 px-14 my-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          My Published Books
        </h2>

        {bookList.length === 0 ? (
          <div className="p-10 text-center border rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm">
            {/* ICON */}
            <div className="flex justify-center mb-4">
              <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center">
                <BookX className="text-purple-600" size={28} />
              </div>
            </div>

            {/* HEADING */}
            <h2 className="text-xl font-bold text-gray-800">No Books Found</h2>

            {/* DESCRIPTION */}
            <p className="text-gray-500 mt-2">
              You haven’t published any books yet. Start writing and publish
              your first ebook to see it here.
            </p>
          </div>
        ) : (
          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <Table className="border-separate border-spacing-y-3">
              <Table.ScrollContainer>
                <Table.Content aria-label="Writer ebook table">
                  {/* HEADER */}
                  <Table.Header className="text-lg font-bold">
                    <Table.Column isRowHeader className="text-[16px] font-bold">
                      Title
                    </Table.Column>

                    <Table.Column className="text-[16px] font-bold">
                      Price
                    </Table.Column>

                    <Table.Column className="text-[16px] font-bold">
                      Status
                    </Table.Column>
                  </Table.Header>

                  {/* BODY */}
                  <Table.Body>
                    {bookList.map((book) => (
                      <Table.Row
                        key={book._id}
                        className="bg-white shadow-sm rounded-xl"
                      >
                        {/* TITLE */}
                        <Table.Cell>
                          <div className="flex items-center gap-3">
                            <img
                              src={book.coverImage}
                              className="w-12 h-12 rounded-lg object-cover"
                              alt={book.title}
                            />

                            <div>
                              <p className="font-semibold text-lg">
                                {book.title}
                              </p>

                              <p className="text-sm text-gray-500">
                                {book.genre}
                              </p>
                            </div>
                          </div>
                        </Table.Cell>

                        {/* PRICE */}
                        <Table.Cell className="text-base font-medium">
                          ${book.price}
                        </Table.Cell>

                        {/* STATUS */}
                        <Table.Cell>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          book?.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                          >
                            {book?.status}
                          </span>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
