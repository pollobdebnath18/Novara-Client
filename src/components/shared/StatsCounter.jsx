"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

function Counter({ value, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1500;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <h3 className="text-4xl font-black text-gray-900">
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
}

export default function StatsCounter() {
  const stats = [
    {
      title: "Books",
      value: 300,
      
    },
    {
      title: "Writers",
      value: 15,
     
    },
    {
      title: "Readers",
      value: 50,
     
    },
  ];

  return (
    <div
      className="
      mt-8
      grid
      grid-cols-1
      sm:grid-cols-3
      gap-5
    
      "
    >
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.2,
          }}
          className="
          bg-white
          border
          rounded-2xl
          p-5
          shadow-sm
          hover:shadow-xl
          transition
          text-center
          "
        >
        

          <Counter value={item.value} />

          <p
            className="
          mt-1
          text-gray-500
          font-medium
          "
          >
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
