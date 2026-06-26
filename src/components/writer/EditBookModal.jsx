"use client";

import React, { useEffect, useState } from "react";
import { Input, Label, Button } from "@heroui/react";
import { updateModal } from "@/lib/actions/writers";
import { useRouter } from "next/navigation";

const genres = [
  "Technology",
  "Programming",
  "Novel",
  "Education",
  "Science",
  "History",
  "Romantic",
];

const EditBookModal = ({ isOpen, setIsOpen, book, setBookList }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    genre: "",
    status: "",
  });

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // fill data
  useEffect(() => {
    if (book) {
      setForm({
        title: book.title || "",
        description: book.description || "",
        price: book.price || "",
        genre: book.genre || "",
        status: book.status || "unpublish",
      });

      setImageUrl(book.coverImage || "");
    }
  }, [book]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const bookId = book?._id;
  // console.log(bookId, "bookId");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookId = book?._id?.$oid || book?._id;

    const payload = {
      ...form,
      price: Number(form.price),
      coverImage: imageUrl,
    };


    const res = await updateModal(bookId, payload, "PATCH");

    setBookList((prev) =>
      prev.map((b) => (b._id === bookId ? { ...b, ...payload } : b)),
    );

    setLoading(false);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[650px] rounded-xl p-6 shadow-xl">
        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-5">Edit Ebook</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 1️⃣ TITLE + STATUS */}
          <div className="flex gap-4 ">
            <div className="flex flex-col flex-1">
              <Label>Title</Label>
              <Input name="title" value={form.title} onChange={handleChange} />
            </div>

            <div className="flex flex-1 flex-col w-[180px]">
              <Label>Status</Label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2"
              >
                <option value="published">Published</option>
                <option value="unpublish">Unpublish</option>
              </select>
            </div>
          </div>

          {/* 2️⃣ DESCRIPTION + IMAGE */}
          <div className="flex gap-4 items-center">
            <div className="flex flex-col flex-1">
              <Label>Description</Label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="border rounded-xl p-2 min-h-[120px]"
              />
            </div>

            <div className="flex flex-col flex-1">
              <Label>Cover Image URL</Label>
              <Input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>

          {/* 3PRICE + GENRE */}
          <div className="flex gap-4 items-center">
            <div className="flex flex-col flex-1">
              <Label>Price</Label>
              <Input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col flex-1">
              <Label>Genre</Label>
              <select
                name="genre"
                value={form.genre}
                onChange={handleChange}
                className="border rounded-xl px-3 py-2"
              >
                {genres.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onPress={() => setIsOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit" color="primary" isLoading={loading}>
              Update Book
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookModal;
