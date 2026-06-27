"use client";

import { Button, Chip } from "@heroui/react";
import { useEffect, useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  CalendarDays,
  User,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import {
  addBookMark,
  checkBookMark,
  removeBookMark,
} from "@/lib/actions/reader";
import toast from "react-hot-toast";

export default function BookDetailsCard({ book, currentUser, isPurchased }) {
  const [loading, setLoading] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const purchased = isPurchased;
  console.log(book);

  useEffect(() => {
    const loadBookmark = async () => {
      if (!currentUser?.id || !book?._id) return;

      try {
        const res = await checkBookMark(currentUser.id, book._id);
        console.log(res, "res");
        setBookmarked(Boolean(res?.isBookmarked));
      } catch (err) {
        console.log(err);
        setBookmarked(false);
      }
    };

    loadBookmark();
  }, [currentUser?.id, book?._id]);

  // console.log(bookmarked,'bookmarked');

  if (!book) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Ebook not found</h2>
      </div>
    );
  }

  const isOwner = currentUser?.email === book.email;
  // console.log(currentUser);

  const handleBuy = async () => {
    try {
      setLoading(true);

      // Stripe checkout API here

      // console.log("Checkout:", book._id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmark = async () => {
    try {
      if (!currentUser?.id) {
        return toast.error("Please login to bookmark this book");
      }
      const data = {
        userId: currentUser.id,
        bookId: book._id,
        writerId: book.id,
      };
      // console.log(data);

      if (!bookmarked) {
        const res = await addBookMark(data, "POST");

        if (res.insertedId) {
          setBookmarked(true);
        }
      } else {
        const res = await removeBookMark(data, "DELETE");

        if (res.deletedCount) {
          setBookmarked(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getGenreColor = () => {
    switch (book.genre) {
      case "Programming":
        return "bg-blue-100 text-blue-700";

      case "Technology":
        return "bg-purple-100 text-purple-700";

      case "Education":
        return "bg-green-100 text-green-700";

      case "Fiction":
        return "bg-pink-100 text-pink-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div
      className="
      max-w-6xl mx-auto
      bg-white
      rounded-3xl
      border
      shadow-sm
      p-6
      md:p-10
      grid
      md:grid-cols-2
      gap-10
    "
    >
      {/* COVER IMAGE */}

      <div
        className="
    group
    relative
    rounded-3xl
    overflow-hidden
    shadow-lg
    border
    bg-gray-100
  "
      >
        <img
          src={book.coverImage}
          alt={book.title}
          className="
      w-full
      h-[450px]
      object-cover

      transition-transform
      duration-500

      group-hover:scale-105
    "
        />

        {/* bookmark */}

        <button
          onClick={handleBookmark}
          className="
      absolute
      top-5
      right-5

      w-12
      h-12

      flex
      items-center
      justify-center

      bg-white/90
      backdrop-blur

      rounded-full

      shadow-lg

      hover:scale-110
      hover:bg-white

      transition-all
      duration-300

      active:scale-95
    "
        >
          {bookmarked ? (
            <BookmarkCheck size={24} className="text-purple-600" />
          ) : (
            <Bookmark size={24} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* DETAILS */}

      <div className="space-y-5">
        <h1
          className="
          text-4xl
          font-bold
          leading-tight
        "
        >
          {book.title}
        </h1>

        {/* WRITER */}

        <Link
          href={`/writer-profile/${book.id}`}
          className="
    group
    flex
    items-center
    gap-2
    w-fit
    text-blue-600
    font-medium
    hover:text-blue-800
    transition-all
    duration-300
  "
        >
          <div
            className="
      w-8
      h-8
      rounded-full
      bg-blue-100
      flex
      items-center
      justify-center
      group-hover:bg-blue-200
      transition
      duration-300
    "
          >
            <User
              size={16}
              className="
        text-blue-600
        group-hover:scale-110
        transition-transform
      "
            />
          </div>

          <span
            className="
      border-b
      border-transparent
      group-hover:border-blue-600
      transition
      duration-300
    "
          >
            {book?.writerName || "Unknown Writer"}
          </span>
        </Link>

        {/* BADGES */}

        <div className="flex flex-wrap gap-3">
          {/* Genre */}
          <div
            className="
    px-4
    py-1.5
    rounded-full
    text-sm
    font-semibold
    shadow-sm
    border
    transition
    hover:scale-105
    duration-300
    "
          >
            <Chip className={getGenreColor()}>{book.genre}</Chip>
          </div>

          {/* Purchase Status */}
          {/* Purchase Status */}
          <Chip
            color={!currentUser ? "warning" : purchased ? "danger" : "success"}
            className="
    px-3
    py-1
    font-semibold
    shadow-sm
    transition
    hover:scale-105
    duration-300
  "
          >
            {!currentUser
              ? "Unavailable"
              : purchased
                ? "Purchased"
                : "Available"}
          </Chip>

          {/* Price */}
          <div
            className="
    flex
    items-center
    gap-1
    px-4
    py-1.5
    rounded-full
    bg-gray-100
    text-gray-800
    font-bold
    shadow-sm
    border
    hover:bg-gray-200
    transition
    duration-300
    "
          >
            <span className="text-green-600">৳</span>

            {book.price}
          </div>
        </div>

        {/* DATE */}

        <div
          className="
  flex
  items-center
  gap-3
  mt-2
  px-4
  py-3
  rounded-xl
  bg-gray-50
  border
  text-sm
  text-gray-600
  shadow-sm
  "
        >
          <div
            className="
    w-9
    h-9
    rounded-full
    bg-blue-100
    flex
    items-center
    justify-center
    "
          >
            <CalendarDays size={17} className="text-blue-600" />
          </div>

          <div>
            <p className="text-xs text-gray-400">Published Date</p>

            <p className="font-medium text-gray-700">
              {book.createdAt
                ? new Date(book.createdAt).toLocaleDateString()
                : "Date unavailable"}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}

        <div
          className="
  mt-6
  p-5
  rounded-2xl
  bg-gray-50
  border
  shadow-sm
  "
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="
      w-8
      h-8
      rounded-lg
      bg-purple-100
      flex
      items-center
      justify-center
      "
            >
              📖
            </div>

            <h3
              className="
      font-bold
      text-lg
      text-gray-800
      "
            >
              About this ebook
            </h3>
          </div>

          <p
            className="
    text-gray-600
    leading-8
    text-sm
    md:text-base
    "
          >
            {book.description}
          </p>
        </div>

        {/* PURCHASE */}

        <form action="/api/payment" method="POST">
          <input type="hidden" name="bookId" value={book._id} />
          <input type="hidden" name="title" value={book.title} />
          <input type="hidden" name="price" value={book.price} />
          <input type="hidden" name="writerId" value={book.id} />
          <Button
            // onPress={handleBuy}
            type="submit"
            isLoading={loading}
            isDisabled={purchased || isOwner}
            startContent={!loading && <ShoppingCart size={18} />}
            className={`
            w-full
    h-14
    rounded-xl
    text-base
    font-bold
    shadow-md
    transition-all
    duration-300
    hover:scale-[1.02]
    active:scale-95

            ${
              !currentUser || purchased || isOwner
                ? "bg-red-100 text-red-600 border border-red-200 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }

          `}
          >
            {!currentUser
              ? "Please Login First"
              : purchased
                ? "Already Purchased"
                : isOwner
                  ? "You cannot buy your own ebook"
                  : "Buy Now"}
          </Button>
        </form>
      </div>
    </div>
  );
}
