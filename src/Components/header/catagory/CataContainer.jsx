import React from "react";
import { catagoryTxt } from "./CataTXT";
import BlakModal from "../../layout/BlakModal";

function CataContainer() {
  return (
    <>
      <BlakModal data={catagoryTxt} />
      {/* <div className=" w-[270px] bg-black absolute top-[40px] ">
        <ul className="flex flex-col">
          {catagoryTxt.map((e) => (
            <li key={e.id} className=" select-none p-3 text-white cursor-pointer hover:pl-4 duration-300 border-b-[2px] border-[#2D2D2D] ">
              <LinkPage txt={e.name} path={e.path} />
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default CataContainer;
