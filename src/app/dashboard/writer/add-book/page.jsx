"use client";

import React, { useState } from "react";

import {
  Form,
  TextField,
  Input,
  Label,
  FieldError,
  Button,
  Textarea,
  Description,
  ListBox,
  Select,
} from "@heroui/react";
import { FaUpload, FaLink } from "react-icons/fa";
import { FaImage } from "react-icons/fa";

import { FaBook, FaFileAlt, FaDollarSign, FaTag } from "react-icons/fa";
import {getUserSession } from "@/lib/core/session";
import { addBook } from "@/lib/actions/writers";

const WriterAddBookPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [mode, setMode] = useState("upload");
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("");

  const genres = [
    "Technology",
    "Programming",
    "Novel",
    "Education",
    "Science",
    "History",
    "Romantic",
  ];

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const user = await getUserSession();
    console.log("user", user);
    const role = user?.role;
    const id = user?.id;
    const email = user?.email;

    // const form = new FormData(e.currentTarget);

    let coverImage = "";

    if (imageFile) {
      coverImage = await uploadToImgBB(imageFile);
    } else {
      coverImage = imageUrl;
    }

    const payload = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: Number(e.target.price.value),
      genre: genre,
      status: e.target.status.value,
      coverImage,
      role,
      id,
      email,
    };

    console.log("FINAL PAYLOAD:", payload);
    const data = await addBook(payload , "POST");

    setLoading(false);

    // 👉 send to backend here
    // await fetch("/api/books", { method: "POST", body: JSON.stringify(payload) })
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Add New Ebook</h1>
        <p className="text-gray-500">Create and publish your ebook easily</p>
      </div>

      {/* FORM */}
      <Form className="space-y-6" onSubmit={onSubmit}>
        {/* TITLE */}
        <div className="grid grid-cols-2 gap-4">
          <TextField name="title" isRequired>
            <Label>Book Title</Label>
            <Input placeholder="Enter ebook title" />
            <FieldError />
          </TextField>
          {/* STATUS */}
          <TextField name="status" isRequired>
            <Label>Status</Label>

            <Input value="unpublish" readOnly />

            <FieldError />
          </TextField>
        </div>

        {/* DESCRIPTION */}
        <TextField name="description" isRequired>
          <Label>Description</Label>

          <textarea
            name="description"
            placeholder="Write full ebook content"
            className="w-full min-h-[10px] rounded-xl border px-3 py-2"
          />

          <FieldError />
        </TextField>

        {/* PRICE + GENRE */}
        <div className="grid md:grid-cols-2 gap-4">
          <TextField
            name="price"
            type="number"
            isRequired
            validate={(value) => {
              if (!value || Number(value) <= 0) {
                return "Price must be greater than 0";
              }
            }}
          >
            <Label>Price</Label>
            <Input placeholder="0" />
            <FieldError />
          </TextField>

          {/* Genre (simple text for Hero UI consistency) */}
          {/* Genre */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Genre <span className="text-red-500">*</span>
            </label>
            <select
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full border rounded-xl px-3 py-2 focus:outline-none"
              required
            >
              <option value="">Select genre</option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <Label>Cover Image</Label>

          {/* MODE SWITCH */}
          <div className="flex gap-3 mt-2 mb-3">
            <button
              type="button"
              onClick={() => setMode("upload")}
              className={`px-3 py-1 rounded-lg text-sm ${
                mode === "upload" ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              Upload File
            </button>

            <button
              type="button"
              onClick={() => setMode("url")}
              className={`px-3 py-1 rounded-lg text-sm ${
                mode === "url" ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              Image URL
            </button>
          </div>

          {/* UPLOAD MODE */}
          {mode === "upload" && (
            <label className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition">
              <FaUpload className="text-3xl text-gray-500" />
              <p className="mt-2 text-sm">Upload cover image</p>

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImageFile(file);
                  setImageUrl(""); // clear URL
                }}
              />
            </label>
          )}

          {/* URL MODE */}
          {mode === "url" && (
            <div className="relative mt-2">
              <FaLink className="absolute left-3 top-3 text-gray-400" />

              <input
                type="text"
                placeholder="Paste image URL (https://...)"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setImageFile(null); // clear file
                }}
                className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none"
              />
            </div>
          )}

          {/* PREVIEW */}
          {(imageFile || imageUrl) && (
            <div className="mt-3 flex items-center gap-3 text-sm text-green-600">
              <FaImage />
              <span>{imageFile ? imageFile.name : imageUrl}</span>
            </div>
          )}
        </div>

        {/* SUBMIT */}
        <div className="w-full">
          {" "}
          <Button type="submit" color="primary" isLoading={loading}>
            Add Ebook
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default WriterAddBookPage;
