import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { getUserSession } from "@/lib/core/session";

export async function POST(request) {
  try {
    const headersList = await headers(request);
    const origin = headersList.get("origin");
    const PRICE_ID = "price_1TlXVKRt7Ibos74KBE4JQ6tG";

    const formData = await request.formData();
    const bookId = formData.get("bookId");
    const writerId = formData.get("writerId");
    const title = formData.get("title");
    const price = Number(formData.get("price"));

    // user
    const user = await getUserSession();

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price_data: {
            currency: "usd",
            unit_amount: Number(price) * 100,
            product_data: {
              name: title,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        priceId: Number(price),
        userEmail: user.email,
        userId: user.id,
        bookId: bookId,
        writerId: String(writerId),
        name: String(title),
      },
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
