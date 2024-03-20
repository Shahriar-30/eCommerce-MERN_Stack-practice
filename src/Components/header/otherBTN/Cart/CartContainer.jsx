import React from "react";
import CartTotal from "./CartTotal";
import Img from "../../../layout/Img";
import { FaXmark } from "react-icons/fa6";

function CartContainer() {
  return (
    <>
      <div className=" w-[270px] bg-Bg absolute top-[40px] right-0 ">
        <ul className="flex flex-col">
          <li className=" select-none p-3 font-bold text-black  flex  hover:pl-4 duration-300 border-b-[2px] border-gray ">
            {/* <LinkPage txt={e.name} path={e.path} /> */}
            <div>
              <Img
                className="h-[80px] w-[140px] rounded"
                src="data:image/jpeg;base64,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"
                alt="Product Img"
              />
            </div>
            <div className="flex flex-col pl-2  w-full justify-center ">
              <div>Black To</div>
              <div>$449</div>
            </div>
            <div className="flex items-center font-bold  text-xl  cursor-pointer">
            <FaXmark />
            </div>
          </li>
        </ul>
        <CartTotal />
      </div>
    </>
  );
}

export default CartContainer;
