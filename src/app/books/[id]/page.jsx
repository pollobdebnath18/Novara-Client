import BookDetailsCard from "@/components/books/BookDetailsCard";
import { getPurchasedBooksByUser } from "@/lib/api/books";
import { getBookForBookDetails } from "@/lib/api/writers";
import { auth } from "@/lib/auth"; // your better-auth/server auth
import { getUserSession } from "@/lib/core/session";

export default async function BookDetailsPage({ params }) {
  const { id } = await params;

  const currentUser = await getUserSession();

  const book = await getBookForBookDetails(id);

  const purchased = currentUser?.id
    ? await getPurchasedBooksByUser(currentUser.id)
    : [];

  const isPurchased = purchased.some(
    (item) => String(item.bookId) === String(book._id),
  );

  if (!book) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Ebook not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <BookDetailsCard
        book={book}
        currentUser={currentUser}
        isPurchased={isPurchased}
      />
    </div>
  );
}