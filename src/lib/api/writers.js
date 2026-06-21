import { serverFetch } from "../core/server";

// manage books for writers
export const getBooksById = async (id) => {
  return serverFetch(`/api/writers/${id}`);
};

//book details by id
export const getBookForBookDetails = async (id) => {
  return serverFetch(`/api/writers/books/${id}`);
};