"use client";

import { Chip, Button } from "@heroui/react";
import { useState } from "react";

export default function BookDetailsCard({ book }) {
  const [loading, setLoading] = useState(false);

  const isSold = book.status === "sold";

  const handleBuy = async () => {
    try {
      setLoading(true);

      // TODO: call your Stripe API here
      console.log("Buying book:", book._id);

      // example:
      // await createCheckoutSession(book._id);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {/* IMAGE */}
      <div className="rounded-xl overflow-hidden border shadow-sm">
        <img src={book.coverImage} className="w-full h-96 object-cover" />
      </div>

      {/* INFO */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{book.title}</h1>

        <p className="text-sm text-gray-600">{book.writerName || book.email}</p>

        {/* CHIPS */}
        <div className="flex gap-2 flex-wrap">
          <Chip size="sm" variant="flat">
            {book.genre}
          </Chip>

          <Chip size="sm" color={isSold ? "danger" : "success"}>
            {isSold ? "Sold" : "Available"}
          </Chip>

          <Chip size="sm" variant="flat">
            ৳ {book.price}
          </Chip>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 leading-relaxed">{book.description}</p>

        {/* BUTTON */}
        <Button
          onPress={handleBuy}
          isLoading={loading}
          isDisabled={isSold}
          className={`w-full ${
            isSold ? "bg-gray-200 text-gray-500" : "bg-black text-white"
          }`}
        >
          {isSold ? "Already Purchased" : "Buy Now"}
        </Button>
      </div>
    </div>
  );
}
