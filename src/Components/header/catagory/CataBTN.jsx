import React from "react";
import { FaBarsProgress } from "react-icons/fa6";
import HeaderBTN from "../../layout/HeaderBTN";

function CataBTN() {
  return (
    <>
    <HeaderBTN txt={'Shop by Category'} btn={<FaBarsProgress className="text-xl" />} />
      {/* <div className="w-full flex gap-1 items-center justify-center rounded-sm p-1 px-2 hover:bg-gray hover:text-white  duration-500 cursor-pointer">
        <FaBarsProgress className="text-xl" />
        <p className="select-none font-normal text-[15px]">Shop by Category</p>
      </div> */}
    </>
  );
}

export default CataBTN;
