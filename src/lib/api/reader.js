import { protectedServerFetch, serverFetch } from "../core/server";

// reader boookmark page api call
export const getAllBookmarkedBooks = async (id) => {
  return protectedServerFetch(`/api/bookmarks/my/${id}`);
};

// reader purchased books page api call
export const getAllPurchasedBooks = async (id) => {
  return protectedServerFetch(`/api/payment/my/${id}`);
};