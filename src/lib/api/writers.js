import { serverFetch } from "../core/server";

export const getBooksById = async (id) => {
  return serverFetch(`/api/writers/${id}`);
};
