import { serverFetch } from "../core/server";

// reader boookmark page api call
export const getAllBookmarkedBooks = async (id) => {
  return serverFetch(`/api/bookmarks/my/${id}`);
};

// reader purchased books page api call
export const getAllPurchasedBooks = async (id) => {
  return serverFetch(`/api/payment/my/${id}`);
};