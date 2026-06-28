import { getTransactions } from "@/lib/api/admin";
import TransactionTable from "@/components/admin/TransactionTable";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div className="space-y-8 p-4 md:p-6">
      {/* HERO HEADER */}
      {/* HEADER */}

      <div
        className="
  relative
  overflow-hidden
  rounded-3xl
  bg-gradient-to-br
  from-slate-950
  via-slate-900
  to-blue-900
  p-8
  text-white
  shadow-xl
  "
      >
        {/* Glow */}

        <div
          className="
    absolute
    -top-20
    -right-20
    w-72
    h-72
    rounded-full
    bg-blue-500/20
    blur-3xl
    "
        />

        <div
          className="
    absolute
    -bottom-20
    -left-20
    w-72
    h-72
    rounded-full
    bg-cyan-400/10
    blur-3xl
    "
        />

        {/* Content */}

        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <div
              className="
        w-14
        h-14
        rounded-2xl
        bg-white/10
        border
        border-white/20
        backdrop-blur-md
        flex
        items-center
        justify-center
        shadow-inner
        text-2xl
        "
            >
              📚
            </div>

            <div>
              <h1
                className="
          text-3xl
          md:text-4xl
          font-extrabold
          tracking-tight
          "
              >
                Manage All Ebooks
              </h1>

              <p
                className="
          mt-2
          text-gray-300
          text-sm
          md:text-base
          "
              >
                Control publishing status, pricing, and ebook availability.
              </p>
            </div>
          </div>

          <div
            className="
      mt-6
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-white/10
      border
      border-white/20
      backdrop-blur-md
      px-4
      py-2
      text-sm
      text-gray-200
      "
          >
            ✅ Publish approved ebooks & manage visibility
          </div>
        </div>
      </div>

      {/* TABLE CARD */}

      <section
        className="
        bg-white
        rounded-3xl
        border
        shadow-xl
        overflow-hidden
        "
      >
        {/* header */}

        <div
          className="
          p-6
          md:p-8
          border-b
          flex
          justify-between
          items-center
          bg-gradient-to-r
          from-indigo-50
          via-white
          to-purple-50
          "
        >
          <div>
            <h2
              className="
              text-xl
              md:text-2xl
              font-bold
              text-gray-800
              "
            >
              Transaction History
            </h2>

            <p
              className="
              mt-1
              text-sm
              text-gray-500
              "
            >
              View user payments, ebook purchases and transaction details.
            </p>
          </div>

          <div
            className="
            hidden
            sm:flex
            px-4
            py-2
            rounded-full
            bg-indigo-100
            text-indigo-700
            text-sm
            font-medium
            "
          >
            Secure Payments
          </div>
        </div>

        {/* table */}

        <div className="p-6">
          <TransactionTable transactions={transactions} />
        </div>
      </section>
    </div>
  );
}
