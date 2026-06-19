import React from "react";
import Image from "next/image";

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$9.99",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    rating: 4.8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2kh39FQSRbdh5EJCwpMnfZFc-s_d1Xqbe2nn3_anDAjIA8Vm3tnDjmUj&s=10",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$10.50",
    rating: 4.9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RQhU_eXCpUNhq5e2fQi139T2oiLUDBZOdQusGcBXjw&s=10",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$7.99",
    rating: 4.6,
    img: "https://viterbigradadmission.usc.edu/wp-content/uploads/2017/07/Nitya-41.png",
  },
  {
    title: "Kothao Keu Nei",
    author: "Humayun Ahmed",
    price: "$6.99",
    rating: 4.9,
    img: "https://i.ytimg.com/vi/roNKHQN-NEY/sddefault.jpg",
  },
  {
    title: "Srikanta",
    author: "Sarat Chandra Chattopadhyay",
    price: "$6.99",
    rating: 4.8,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1264016591i/1417962.jpg",
  },
];
const PopularBooks = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Popular Books</h2>

          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Discover the most loved books around the world, cherished by
            millions of readers for their powerful storytelling, emotional
            depth, and lasting impact.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full">
                <Image
                  src={book.img}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{book.title}</h3>

                <p className="text-sm text-gray-500">{book.author}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-purple-600 font-semibold">
                    {book.price}
                  </span>

                  <span className="text-sm text-gray-600">
                    ⭐ {book.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
