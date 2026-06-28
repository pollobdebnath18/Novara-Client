"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import BannerImg from "../../image/book_banner.webp";
import StatsCounter from "../shared/StatsCounter";

const Banner = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-[600px]
      flex
      items-center
      bg-gradient-to-br
      from-violet-50
      via-white
      to-pink-50
      "
    >
      {/* background blobs */}

      <div
        className="
        absolute
        -top-32
        -left-32
        w-[450px]
        h-[450px]
        bg-purple-300
        rounded-full
        blur-[120px]
        opacity-30
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[400px]
        h-[400px]
        bg-pink-300
        rounded-full
        blur-[120px]
        opacity-30
        "
      />

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        pb-8
        pt-4
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span
            className="
          inline-flex
          px-5
          py-2
          rounded-full
          bg-purple-100
          text-purple-700
          font-semibold
          text-sm
          "
          >
            📚 World s Digital Book Platform
          </span>
          <h1
            className="
          mt-3
          text-5xl
          md:text-7xl
          font-black
          leading-[1.05]
          tracking-tight
          text-gray-900
          "
          >
            Discover & Read
            <br />
            <span
              className="
            bg-gradient-to-r
            from-purple-600
            via-fuchsia-500
            to-pink-500
            bg-clip-text
            text-transparent
            "
            >
              Original Ebooks
            </span>
          </h1>

          <p
            className="
          mt-5
          text-lg
          md:text-xl
          text-gray-600
          max-w-xl
          leading-relaxed
          "
          >
            Discover amazing ebooks from talented writers. Explore stories,
            knowledge and imagination in one modern digital library.
          </p>
          <div
            className="
          mt-7
          flex
          gap-5
          "
          >
            <Link
              href="/books"
              className="
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            text-white
            font-bold
            shadow-xl
            hover:scale-105
            transition
            "
            >
              Explore Books →
            </Link>
          </div>
          {/* stats */}
          <StatsCounter />
          {/* <div
            className="
          mt-12
          flex
          gap-10
          "
          >
            <div>
              <h3 className="text-3xl font-black">10K+</h3>
              <p className="text-gray-500">Books</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">5K+</h3>
              <p className="text-gray-500">Writers</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">50K+</h3>
              <p className="text-gray-500">Readers</p>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
        relative
        flex
        justify-center
        "
        >
          {/* floating card 1 */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
          absolute
          top-10
          left-0
          z-10
          bg-white
          shadow-xl
          rounded-2xl
          px-5
          py-4
          "
          >
            <p className="text-sm text-gray-500">Total Books</p>

            <h3 className="text-xl font-bold">300+</h3>
          </motion.div>

          {/* floating card 2 */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
          absolute
          bottom-20
          right-0
          z-10
          bg-white
          shadow-xl
          rounded-2xl
          px-5
          py-4
          "
          >
            <p className="text-sm text-gray-500">Active Writers</p>

            <h3 className="text-xl font-bold">15+</h3>
          </motion.div>

          {/* image card */}

          <div
            className="
          relative
          p-6
          rounded-[40px]
          bg-white/60
          backdrop-blur-xl
          shadow-2xl
          border
          "
          >
            <div
              className="
            absolute
            inset-0
            bg-purple-400
            blur-3xl
            opacity-30
            -z-10
            "
            />

            <Image
              src={BannerImg}
              alt="books"
              width={550}
              height={550}
              className="
            rounded-[30px]
            object-cover
            shadow-xl
            "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
