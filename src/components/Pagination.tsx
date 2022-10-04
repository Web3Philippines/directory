import React, { Dispatch, SetStateAction } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface PaginationInterface {
  page: number;
  length: number;
  size: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ page, setPage, length, size }: PaginationInterface) {
  console.log(length / size);
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <p className="mb-2 text-center">
        Showing <strong>{page * size - (size - 1)}</strong> to{" "}
        <strong>{length >= size * page ? size * page : length}</strong> of{" "}
        <strong>{length}</strong> entries
      </p>
      <div className="flex flex-row items-center justify-center">
        <button
          className="flex flex-row items-center space-x-3 rounded-l-md bg-gray-700 py-2 px-4 text-white hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          <BsArrowLeft size={24} />
          <span>Prev</span>
        </button>
        <button
          className=" flex flex-row items-center space-x-3 rounded-r-md border-l border-white bg-gray-700 py-2 px-4 text-white hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={() => setPage(page + 1)}
          disabled={length / size <= page}
        >
          <span>Next</span>
          <BsArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
