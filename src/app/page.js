import Banner from "@/components/home/Banner";
import EbookGenres from "@/components/home/EbookGenres";
import PopularBooks from "@/components/home/PopularBooks";
import PopularWriters from "@/components/home/PopularWriters";
import TopWriters from "@/components/home/TopWriters";

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
