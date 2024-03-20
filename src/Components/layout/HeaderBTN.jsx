import React from "react";

function HeaderBTN({btn, txt}) {
  return (
    <>
      <div className="w-full flex gap-1 items-center justify-center rounded-sm p-1 px-2 hover:bg-gray hover:text-white  duration-500 cursor-pointer">
        {/* <{...btn} className="text-xl" /> */}
        {btn}
        <p className="select-none font-normal text-[15px]">{txt}</p>
      </div>
    </>
  );
}

export default HeaderBTN;
