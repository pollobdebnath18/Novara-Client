import { serverFetch } from "../core/server";

export const getAllBooks = async (page) => {
  if (!page) {
    page = 1;
  }
  return serverFetch(`/api/paginations?page=${page}`);
};

export const getBookById = async (id) => {
  return serverFetch(`/api/books/${id}`);
};

//writers bookmark page api call for get all bookmarked books by user
export const getBookmarkedBooksByUser = async (id) => {
  return serverFetch(`/api/bookmark?writerId=${id}`);
};

// book details page api call for purchased books
export const getPurchasedBooksByUser = async (id) => {
  return serverFetch(`/api/purchases/my/?userId=${id}`);
};
