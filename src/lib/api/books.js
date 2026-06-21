import { serverFetch } from "../core/server";

export const getAllBooks = async () => {
  return serverFetch(`/api/writers`);
};

export const getBookById = async (id) => {
  return serverFetch(`/api/books/${id}`);
};
