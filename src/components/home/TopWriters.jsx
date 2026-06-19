import React from "react";
import Image from "next/image";

const writers = [
  {
    name: "Abdur Rahman Siddique",
    role: "Contemporary Fiction Writer",
    desc: "Writes simple emotional stories based on everyday Bangladeshi life, relationships, and personal struggles of young people.",
    img: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Farhana Akter",
    role: "Romantic Short Story Writer",
    desc: "Focuses on short romantic and emotional stories inspired by real-life experiences of urban youth and love relationships.",
    img: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Mahmudul Hasan",
    role: "Social & Family Story Writer",
    desc: "Creates family-based stories highlighting social issues, values, and emotional conflicts in Bangladeshi middle-class life.",
    img: "https://i.pravatar.cc/300?img=33",
  },
];

const TopWriters = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Top Writers</h2>
          <p className="text-gray-500 mt-2">
            Celebrating Bangladeshi literary voices and timeless storytellers
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {writers.map((writer, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                text-center
              "
            >
              {/* IMAGE */}
              <div className="flex justify-center mb-4">
                <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-purple-200">
                  <Image
                    src={writer.img}
                    alt={writer.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold text-gray-900">
                {writer.name}
              </h3>

              {/* ROLE */}
              <p className="text-sm text-purple-600 font-medium mt-1">
                {writer.role}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {writer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopWriters;
