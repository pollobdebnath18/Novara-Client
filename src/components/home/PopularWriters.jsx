import React from "react";
import Image from "next/image";

const writers = [
  {
    name: "Humayun Ahmed",
    role: "Literary Fiction & Storytelling",
    desc: "A legendary author known for deeply emotional storytelling, relatable characters, and timeless Bangladeshi literature that connects with all generations.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqU8ufxT3th4k-sBs4fw7ig3ktYvyBnuX8TyRG2VTTVkYY8hNGFESLXoI&s=10",
  },
  {
    name: "Charles Dickens",
    role: "Classic Literature Writer",
    desc: "Renowned for his vivid portrayal of Victorian society, powerful storytelling, and unforgettable characters in classic English literature.",
    img: "https://cdn.shopify.com/s/files/1/0298/3968/7725/files/Charles_Dickens__Woodburytype__1.jpg",
  },
  {
    name: "Rabindranath Tagore",
    role: "Poet & Philosophical Writer",
    desc: "Nobel Prize-winning author whose works blend poetry, philosophy, and human emotion, shaping Bengali literature and culture globally.",
    img: "https://www.blog.gangalib.org/wp-content/uploads/2021/04/Tagore-painting-large.jpg",
  },
  {
    name: "Kazi Nazrul Islam",
    role: "Revolutionary Poet & Writer",
    desc: "Known as the 'Rebel Poet', he inspired social change through powerful poetry, music, and writings that challenged oppression and injustice.",
    img: "https://marxbadipath.org/userfiles/kazinajrul.png",
  },
  {
    name: "William Shakespeare",
    role: "Playwright & Classic Literature Icon",
    desc: "One of the greatest writers in English literature, famous for timeless plays and poems exploring love, power, tragedy, and human nature.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ERV2JidJlzFWue-YBOTYhoOhCDZicNkWbqPv5vGL1j8N8PAO7UQeR0ua&s=10",
  },
  {
    name: "Leo Tolstoy",
    role: "Realist Novelist & Philosopher",
    desc: "Renowned Russian author known for epic novels that explore morality, society, and the depth of human psychology, including 'War and Peace'.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7k0Us-I6Kw4DPIKbuNlnvMQ0LYDMsbVmucohCdg6E82CyJT0CAj69DeI&s=10",
  },
];

const PopularWriters = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Popular Writers</h2>

          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Discover world-renowned authors known for their timeless
            storytelling, emotional depth, and powerful narratives that
            transcend cultures and generations.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {writers.map((writer, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                rounded-2xl
                shadow-sm
                hover:shadow-lg
                transition-all
                p-6
                text-center
                hover:-translate-y-1
              "
            >
              {/* IMAGE */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-purple-200">
                  <Image
                    src={writer.img}
                    alt={writer.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold">{writer.name}</h3>

              {/* ROLE */}
              <p className="text-sm text-purple-600 font-medium">
                {writer.role}
              </p>

              {/* DESC */}
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                {writer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularWriters;
