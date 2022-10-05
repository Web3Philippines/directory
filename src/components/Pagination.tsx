import React, { Dispatch, SetStateAction } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface PaginationInterface {
  page: number;
  length: number;
  size: number;
  hasNextPage: boolean;
  setPage: Dispatch<SetStateAction<number>>;
}

function Pagination({
  page,
  setPage,
  length,
  size,
  hasNextPage,
}: PaginationInterface) {
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <p className="mb-2 text-center">
        Showing <strong>{page * size - (size - 1)}</strong> to{" "}
        <strong>{hasNextPage ? size * page : length}</strong> of{" "}
        <strong>{length}</strong> entries
      </p>
      <div className="flex flex-row items-center justify-center">
        <button
          className="flex flex-row items-center space-x-3 rounded-l-md bg-gray-700 py-2 px-4 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-500"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          <BsArrowLeft size={24} />
          <span>Prev</span>
        </button>
        <button
          className=" flex flex-row items-center space-x-3 rounded-r-md border-l border-white bg-gradient-to-r from-purple-900 to-violet-500 py-2 px-4 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-500"
          onClick={() => setPage(page + 1)}
          disabled={!hasNextPage}
        >
          <span>Next</span>
          <BsArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
