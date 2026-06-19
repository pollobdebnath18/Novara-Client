import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import BannerImg from '../../image/book_banner.webp'

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover & Read{" "}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Original Ebooks
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-xl">
            Explore thousands of ebooks from talented writers around the world.
            Read, discover, and connect with stories that inspire you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              className="
                bg-gradient-to-r 
                from-purple-600 via-fuchsia-500 to-pink-500
                text-white
                px-6 py-2
                shadow-md
                hover:shadow-xl
                hover:scale-[1.05]
                transition-all
                duration-300
              "
            >
              Explore More
            </Button>

            <Button variant="flat" className="px-6 py-2">
              Browse Ebooks
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src={BannerImg} // 👉 replace with your image
              alt="ebooks banner"
              width={500}
              height={500}
              className="object-contain drop-shadow-xl"
            />

            {/* floating glow effect */}
            <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-purple-300 blur-3xl opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
