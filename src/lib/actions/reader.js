import { serverFetch, serverMutation } from "../core/server";

export const addBookMark = async (data, method) => {
  return serverMutation(`/api/bookmark`, data, method);
};

export const removeBookMark = async (data, method) => {
  return serverMutation(`/api/bookmark`, data, method);
};

export const checkBookMark = async (userId, bookId) => {
  return serverFetch(`/api/bookmark-check?userId=${userId}&bookId=${bookId}`);
};
