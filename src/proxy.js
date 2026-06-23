import { NextResponse } from "next/server";
import { getUserSession } from "./lib/core/session";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const user = await getUserSession();
    console.log(user,"user from proxy");
    if(!user) {
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
 
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/dashboard/reader","/dashboard/writer","/dashboard/admin"],
};
