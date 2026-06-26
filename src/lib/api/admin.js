import { protectedServerFetch, serverFetch } from "../core/server";

export const getAllBooks = async () => {
  return protectedServerFetch(`/api/writers/admin`);
};

// trnasactions page api call
export const getTransactions = async () => {
  return protectedServerFetch(`/api/transactions`);
};
