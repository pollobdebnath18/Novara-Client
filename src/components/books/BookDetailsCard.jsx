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

export default function BookDetailsCard({ book, currentUser }) {
  const [loading, setLoading] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [purchased, setPurchased] = useState(book?.isSold || false);

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
        relative
        rounded-2xl
        overflow-hidden
        shadow-md
      "
      >
        <img
          src={book.coverImage}
          alt={book.title}
          className="
            w-full
            h-[450px]
            
          "
        />

        {/* bookmark */}

        <button
          onClick={handleBookmark}
          className="
    absolute
    top-4
    right-4
    bg-white
    p-3
    rounded-full
    shadow
    hover:scale-105
    transition
  "
        >
          {bookmarked ? (
            <BookmarkCheck size={22} className="text-purple-600" />
          ) : (
            <Bookmark size={22} className="text-gray-600" />
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
          href={`/writers/${book.id}`}
          className="
            flex
            items-center
            gap-2
            text-gray-600
            hover:text-black
            transition
          "
        >
          <User size={18} />

          <span>{book?.writerName || "Unknown Writer"}</span>
        </Link>

        {/* BADGES */}

        <div className="flex flex-wrap gap-3">
          <Chip className={getGenreColor()}>{book.genre}</Chip>

          <Chip color={purchased ? "danger" : "success"}>
            {purchased ? "Sold" : "Available"}
          </Chip>

          <Chip variant="flat">৳ {book.price}</Chip>
        </div>

        {/* DATE */}

        <div
          className="
          flex
          items-center
          gap-2
          text-sm
          text-gray-500
        "
        >
          <CalendarDays size={17} />

          {book.createdAt
            ? new Date(book.createdAt).toLocaleDateString()
            : "Date unavailable"}
        </div>

        {/* DESCRIPTION */}

        <div>
          <h3
            className="
            font-semibold
            text-lg
            mb-2
          "
          >
            About this ebook
          </h3>

          <p
            className="
            text-gray-600
            leading-relaxed
          "
          >
            {book.description}
          </p>
        </div>

        {/* PURCHASE */}

        <Button
          onPress={handleBuy}
          isLoading={loading}
          isDisabled={purchased || isOwner}
          startContent={!loading && <ShoppingCart size={18} />}
          className={`
            w-full
            h-12
            text-md
            font-semibold

            ${
              purchased || isOwner
                ? "bg-gray-200 text-gray-500"
                : "bg-black text-white hover:bg-gray-800"
            }

          `}
        >
          {purchased
            ? "Already Purchased"
            : isOwner
              ? "You cannot buy your own ebook"
              : "Buy Now"}
        </Button>
      </div>
    </div>
  );
}
