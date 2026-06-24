import {
  FaBook,
  FaChartLine,
  FaBookmark,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function WriterStats({
  books = [],
  sales = [],
  bookmarks = [],
}) {
  const totalRevenue = sales.reduce(
    (sum, sale) => sum + Number(sale.priceId || 0),
    0,
  );
  const cards = [
    {
      title: "Total Ebooks",
      value: books.length,
      icon: <FaBook />,
      color: "from-blue-500 to-blue-600",
    },

    {
      title: "Total Sales",
      value: sales.length,
      icon: <FaChartLine />,
      color: "from-green-500 to-green-600",
    },

    {
      title: "Bookmarks",
      value: bookmarks.length,
      icon: <FaBookmark />,
      color: "from-purple-500 to-purple-600",
    },

    {
      title: "Published Books",
      value: books.filter((book) => book.status === "published").length,
      icon: <FaCheckCircle />,
      color: "from-emerald-500 to-emerald-600",
    },

    {
      title: "Unpublished Books",
      value: books.filter((book) => book.status === "unpublish").length,
      icon: <FaClock />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Total Revenue",
      value: `৳ ${totalRevenue}`,
      icon: <FaMoneyBillWave />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const Card = ({ card }) => (
    <div
      className="
      bg-white
      border
      rounded-3xl
      p-6
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-1
      transition
      "
    >
      <div
        className={`
        w-14
        h-14
        rounded-2xl
        flex
        items-center
        justify-center
        text-white
        text-xl
        bg-gradient-to-br
        ${card.color}
        `}
      >
        {card.icon}
      </div>

      <p className="mt-5 text-gray-500 font-medium">{card.title}</p>

      <h2
        className="
        text-4xl
        font-bold
        mt-2
        text-gray-800
      "
      >
        {card.value}
      </h2>

      <p className="text-sm text-gray-400 mt-2">Updated statistics</p>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* TOP 3 */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        "
      >
        {cards.slice(0, 3).map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

      {/* BOTTOM 3 */}

      <div
        className="
  grid
  grid-cols-1
  md:grid-cols-3
  gap-6
  "
      >
        {cards.slice(3).map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
