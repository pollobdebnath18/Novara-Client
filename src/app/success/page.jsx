import { addPayment } from "@/lib/actions/payment";
import { stripe } from "@/lib/stripe";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    metadata,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    const data = {
        ...metadata,
        sessionId: session_id,
    }
   const payment = await addPayment(data, "POST");
    console.log(payment);
    return (
      <section
        id="success"
        className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
      >
        <div className="bg-white shadow-xl rounded-2xl px-8 py-8 pt-4 max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-5">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="text-green-600 w-16 h-16" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Payment Successful 🎉
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-5">
            Thank you for your purchase! Your payment has been completed
            successfully.
          </p>

          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Confirmation email sent to</p>

            <p className="font-semibold text-gray-800">{customerEmail}</p>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            If you have any questions, contact us at{" "}
            <a
              href="mailto:orders@example.com"
              className="text-blue-600 hover:underline"
            >
              orders@example.com
            </a>
          </p>

          {/* Button */}
          <Link
            href="/books"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }
}
