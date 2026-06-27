"use client";

import React from "react";
import BookCard from "../books/BookCard";
import { motion } from "motion/react";

const Featured = ({ books = [] }) => {
  return (
    <div className="p-6 mt-20">
      <section className="mb-10">
        {/* HEADER */}

        <motion.div
          className="
          mb-10
          text-center
          flex
          flex-col
          items-center
          "
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-blue-100
            text-blue-600
            text-sm
            font-semibold
            mb-4
            "
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            📚 Featured Collection
          </motion.div>

          <h2
            className="
            text-3xl
            md:text-5xl
            font-extrabold
            text-gray-900
            "
          >
            Featured Books
          </h2>

          <p
            className="
            mt-4
            max-w-2xl
            text-gray-500
            text-base
            md:text-lg
            leading-relaxed
            "
          >
            Explore handpicked ebooks from talented writers. Discover inspiring
            stories, knowledge, and ideas carefully selected for our readers.
          </p>

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-6
            mt-6
            text-sm
            text-gray-500
            "
          >
            <span>📖 New Releases</span>

            <span>✍️ Top Writers</span>

            <span>⭐ Reader Favorites</span>
          </div>
        </motion.div>

        {/* BOOK GRID */}

        <motion.div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          "
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {
              opacity: 0,
            },

            visible: {
              opacity: 1,

              transition: {
                staggerChildren: 0.35,
              },
            },
          }}
        >
          {books.map((book) => (
            <motion.div
              key={book._id}
              variants={{
                hidden: {
                  opacity: 0,

                  y: 80,

                  scale: 0.85,
                },

                visible: {
                  opacity: 1,

                  y: 0,

                  scale: 1,
                },
              }}
              whileHover={{
                scale: 1.06,

                y: -10,
              }}
              transition={{
                duration: 0.8,

                ease: "easeOut",
              }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Featured;
