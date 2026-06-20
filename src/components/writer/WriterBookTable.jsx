"use client";

import React, { useState } from "react";
import { Table, Button } from "@heroui/react";
import { Pencil, TrashBin } from "@gravity-ui/icons";
import EditBookModal from "./EditBookModal";
import { DeletedModal } from "./DeleteModal";
import { deleteBookById, updateBookStatus } from "@/lib/actions/writers";
import { useRouter } from "next/navigation";

const WriterBookTable = ({ books = [] }) => {
  const [bookList, setBookList] = useState(books);
  const [deleteBook, setDeleteBook] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const router = useRouter();

  const [editBook, setEditBook] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = (book) => {
    setEditBook(book);
    setIsOpen(true);
  };

  const openDeleteModal = (book) => {
    setDeleteBook(book);
    setIsDeleteOpen(true);
  };

  const confirmDelete = async (id, book) => {
    const res = await deleteBookById(id, book, "DELETE");

    setBookList((prev) => prev.filter((b) => b._id !== id));

    setIsDeleteOpen(false);
  };

  const handleStatus = async (book, bookId) => {
    const newStatus = book.status === "published" ? "unpublish" : "published";

    const res = await updateBookStatus(bookId, { status: newStatus }, "PATCH");
    setBookList((prev) =>
      prev.map((b) =>
        b._id === bookId
          ? {
              ...b,
              status: b.status === "published" ? "unpublish" : "published",
            }
          : b,
      ),
    );
    router.refresh();
  };

  return (
    <div className="w-full">
      <EditBookModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        book={editBook}
        setBookList={setBookList}
      />
      <DeletedModal
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        book={deleteBook}
        onConfirm={confirmDelete}
      />
      <Table className="border-separate border-spacing-y-3">
        <Table.ScrollContainer>
          <Table.Content aria-label="Writer ebook table">
            {/* HEADER */}
            <Table.Header className="text-lg font-bold">
              <Table.Column isRowHeader className="text-[17px] font-extrabold">
                Title
              </Table.Column>

              <Table.Column className="text-[17px] font-extrabold">
                Price
              </Table.Column>

              <Table.Column className="text-[17px] font-extrabold">
                Status
              </Table.Column>

              <Table.Column className="text-[17px] font-extrabold">
                Actions
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
                        className="w-10 h-10 rounded-lg object-cover"
                      />

                      <div>
                        <p className="font-semibold text-lg">{book.title}</p>

                        <p className="text-sm text-gray-500">{book.genre}</p>
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
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        book.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {book.status}
                    </span>
                  </Table.Cell>

                  {/* ACTION */}
                  <Table.Cell>
                    <div className="flex gap-6">
                      <Button
                        size="sm"
                        variant="secondary"
                        onPress={() => handleEdit(book)}
                      >
                        <Pencil />
                      </Button>

                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-[90px]"
                        onPress={() => handleStatus(book, book._id)}
                      >
                        {book.status === "published" ? "Unpublish" : "Publish"}
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        onPress={() => openDeleteModal(book)}
                      >
                        <TrashBin />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default WriterBookTable;
