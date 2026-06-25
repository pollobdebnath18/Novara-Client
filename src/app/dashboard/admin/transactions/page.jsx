import { getTransactions } from "@/lib/api/admin";
import TransactionTable from "@/components/admin/TransactionTable";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div className="space-y-8">
      {/* HERO HEADER */}
      <section
        className="
        relative
        overflow-hidden
        rounded-3xl
        p-8
        md:p-10
        bg-gradient-to-br
        from-slate-950
        via-indigo-700
        to-purple-700
        text-white
        shadow-2xl
        "
      >
        {/* glow */}
        <div
          className="
          absolute
          -top-24
          -right-24
          w-72
          h-72
          bg-white/10
          rounded-full
          blur-3xl
          "
        />

        <div className="relative flex justify-between items-center">
          <div>
            <div className="flex items-center gap-4">
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-white/20
                backdrop-blur
                flex
                items-center
                justify-center
                text-3xl
                shadow-lg
                "
              >
                💳
              </div>

              <h1
                className="
                text-3xl
                md:text-4xl
                font-extrabold
                tracking-tight
                "
              >
                Transactions
              </h1>
            </div>

            <p
              className="
              mt-4
              max-w-xl
              text-white/80
              text-sm
              md:text-base
              "
            >
              Manage and monitor all ebook purchases, payments and financial
              activities from your admin dashboard.
            </p>

            <div
              className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2
              bg-white/15
              border
              border-white/20
              backdrop-blur
              text-sm
              "
            >
              📊 {transactions.length} Total Transactions
            </div>
          </div>

          <div
            className="
            hidden
            md:flex
            w-28
            h-28
            rounded-full
            bg-white/10
            backdrop-blur
            items-center
            justify-center
            text-5xl
            shadow-xl
            "
          >
            💰
          </div>
        </div>
      </section>

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
