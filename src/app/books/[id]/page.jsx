import BookDetailsCard from "@/components/books/BookDetailsCard";
import { getBookById } from "@/lib/api/books";
import { getBookForBookDetails, getBooksById } from "@/lib/api/writers";

export default async function BookDetailsPage({ params }) {
const bookId =await params;
  console.log(bookId?.id);
  const book = await getBookForBookDetails(bookId?.id);
  // console.log(book);

  if (!book) {
    return <div className="p-6">Ebook not found</div>;
  }

  return (
    <div className="p-6">
      <BookDetailsCard book={book} />
    </div>
  );
}
