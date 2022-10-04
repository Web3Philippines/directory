import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Pagination() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center mb-2">
        Showing <strong>1</strong> to <strong>10</strong> of{" "}
        <strong>100</strong> entries
      </p>
      <div className="flex flex-row items-center justify-center">
        <button className="flex flex-row items-center space-x-3 rounded-l-md bg-gray-700 py-2 px-4 text-white hover:bg-gray-600">
          <BsArrowLeft size={24} />
          <span>Prev</span>
        </button>
        <button className=" flex flex-row items-center space-x-3 rounded-r-md border-l border-white bg-gray-700 py-2 px-4 text-white hover:bg-gray-600">
          <span>Next</span>
          <BsArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
