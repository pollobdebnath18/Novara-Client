"use server";
import { headers } from "next/headers";
import { auth } from "../auth";
import { serverFetch } from "./server";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session?.user || null;
};

export const getAllUsers = async () => {
  return serverFetch("/api/user");
};

export const requireRole = async (role) => {
  const user = await getUserSession();
  // console.log('userRole : ',user?.role ,"role : ",role);
  if (user?.role !== role) {
    return redirect("/unauthorized");
  }
};

// export const jwtToken = async () => {

//   const res = await fetch(
//     `${process.env.BETTER_AUTH_URL}/api/auth/token`,
//     {
//       headers: await headers(),
//       cache: "no-store",
//     },
//   );
//   const data = await res.json();
//   return data?.token || null;
// };

