import React from "react";
import { FaSearch } from "react-icons/fa";

function Input() {
  return (
    <>
      <div className=" bg-white flex items-center justify-center mt-2 px-2">
        <input
          type="text"
          className="w-[300px] px-3 py-1 font-medium rounded-sm outline-none"
          placeholder="Search Products"
        />
        <div className="cursor-pointer  px-2 py-1">
          <FaSearch className="text-xl" />
        </div>
      </div>
    </>
  );
}

export default Input;
