"use client";

import { Pagination } from "@heroui/react";
import Link from "next/link";

export default function BookPagination({ booksData }) {
  const { page, totalPages } = booksData;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className=" w-full flex justify-end mt-8">
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous isDisabled={page === 1}>
              <Link
                className="flex gap-1 items-center"
                href={`/books?page=${page - 1}`}
              >
                <Pagination.PreviousIcon /> Prev
              </Link>
            </Pagination.Previous>
          </Pagination.Item>

          {pages.map((p) => (
            <Pagination.Item key={p}>
              <Link href={`/books?page=${p}`}>
                <Pagination.Link
                  className={`${p === page && "bg-blue-500 text-white"}`}
                  isActive={p === page}
                >
                  {p}
                </Pagination.Link>
              </Link>
            </Pagination.Item>
          ))}

          <Pagination.Item>
            <Pagination.Next isDisabled={page === totalPages}>
              <Link
                className="flex gap-1 items-center"
                href={`/books?page=${page + 1}`}
              >
                Next <Pagination.NextIcon />
              </Link>
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  );
}
