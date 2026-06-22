import BookDetailsCard from "@/components/books/BookDetailsCard";
import { getBookForBookDetails } from "@/lib/api/writers";
import { auth } from "@/lib/auth"; // your better-auth/server auth
import { getUserSession } from "@/lib/core/session";

export default async function BookDetailsPage({ params }) {
  const { id } = await params;

  // logged user
  const currentUser = await getUserSession();

  // console.log(currentUser, "currentUser");

  const book = await getBookForBookDetails(id);

  if (!book) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Ebook not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <BookDetailsCard book={book} currentUser={currentUser} />
    </div>
  );
}
