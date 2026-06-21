"use server";
import { headers } from "next/headers";
import { auth } from "../auth";
import { serverFetch } from "./server";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session?.user || null;
};

export const getAllUsers = async () => {
  return serverFetch("/api/user");
};
