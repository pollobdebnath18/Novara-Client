import { protectedServerFetch, serverFetch } from "../core/server";

export const getAllBooks = async (
  page = 1,
  search = "",
  genre = "",
  price = "",
  status = "",
  sort="",
) => {
  if (!page) {
    page = 1;
  }
  return serverFetch(
    `/api/paginations?page=${page}&search=${search}&genre=${genre}&price=${price}&status=${status}&sort=${sort}`,
  );
};

export const getBookById = async (id) => {
  return serverFetch(`/api/books/${id}`);
};

export const getFeaturedBooks = async () => {
  return serverFetch(`/api/featured-books`);
};

//writers bookmark page api call for get all bookmarked books by user
export const getBookmarkedBooksByUser = async (id) => {
  return protectedServerFetch(`/api/bookmark/writer?writerId=${id}`);
};

// book details page api call for purchased books
export const getPurchasedBooksByUser = async (id) => {
  return serverFetch(`/api/purchases/my/?userId=${id}`);
};
