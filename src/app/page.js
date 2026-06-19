import Banner from "@/components/home/Banner";
import EbookGenres from "@/components/shared/EbookGenres";
import PopularBooks from "@/components/shared/PopularBooks";
import PopularWriters from "@/components/shared/PopularWriters";
import TopWriters from "@/components/shared/TopWriters";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularWriters></PopularWriters>
      <PopularBooks></PopularBooks>
      <TopWriters></TopWriters>
      <EbookGenres></EbookGenres>
    </div>
  );
}
