import { serverMutation } from "../core/server";

export const userRoleChanged = async (id, role, method) => {
  return serverMutation(`/api/user/${id}`, role, method);
};

export const userDeleted = async (id, method) => {
  return serverMutation(`/api/user/${id}`, {}, method);
};

// ebooks page book deleted api call
export const bookDeleted = async (id, book, method) => {
  return serverMutation(`/api/writers/delete/${id}`, book, method);
};

// ebooks page book status changed api call
export const bookStatusChanged = async (id, status, method) => {
  return serverMutation(`/api/writers/status/${id}`, status, method);
};
