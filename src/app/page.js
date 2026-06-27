import Banner from "@/components/home/Banner";
import EbookGenres from "@/components/home/EbookGenres";
import Featured from "@/components/home/Featured";
import PopularBooks from "@/components/home/PopularBooks";
import PopularWriters from "@/components/home/PopularWriters";
import TopWriters from "@/components/home/TopWriters";
import { getFeaturedBooks } from "@/lib/api/books";

export  default async function Home() {
const books = await getFeaturedBooks();  
return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Featured books={books}></Featured>
      <PopularWriters></PopularWriters>
      <PopularBooks></PopularBooks>
      <TopWriters></TopWriters>
      <EbookGenres></EbookGenres>
    </div>
  );
}
