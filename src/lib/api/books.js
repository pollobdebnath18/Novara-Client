import { serverFetch } from "../core/server";

export const getAllBooks = async () => {
  return serverFetch(`/api/writers`);
};

export const getBookById = async (id) => {
  return serverFetch(`/api/books/${id}`);
};

//writers bookmark page api call for get all books by user
export const getBookmarkedBooksByUser = async (id) => {
  return serverFetch(`/api/bookmark/${id}`);
};