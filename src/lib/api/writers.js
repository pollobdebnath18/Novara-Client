import { serverFetch } from "../core/server";

// manage books for writers
export const getBooksById = async (id) => {
  return serverFetch(`/api/writers/${id}`);
};

//book details by id
export const getBookForBookDetails = async (id) => {
  return serverFetch(`/api/writers/books/${id}`);
};

// sales history api for writers
export const getSalesHistory = async (id) => {
  return serverFetch(`/api/sales-history?writerId=${id}`);
}