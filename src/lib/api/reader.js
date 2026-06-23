import { serverFetch } from "../core/server";

// reader boookmark page api call
export const getAllBookmarkedBooks = async (id) => {
  return serverFetch(`/api/bookmarks/my/${id}`);
};