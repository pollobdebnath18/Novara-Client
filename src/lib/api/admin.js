import { serverFetch } from "../core/server";

export const getAllBooks = async () => {
  return serverFetch(`/api/writers/admin`);
};

// trnasactions page api call
export const getTransactions = async () => {
  return serverFetch(`/api/transactions`);
};
