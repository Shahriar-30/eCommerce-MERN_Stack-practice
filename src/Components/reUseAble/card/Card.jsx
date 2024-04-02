import React from "react";
import { FaHeart } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import Button from '../../reUseAble/Button'

function Card({cardImg, cardName, cardPrize, tag,cardBrand}) {



  return (
    <div className="w-full h-[380px]  sm:w-[300px] flex flex-col group overflow-hidden relative">
      <div className="relative">
      {tag && <Button txt={tag} className={"px-7 cursor-default py-1 capitalize w-fit absolute top-2 left-2"} />}
        <img
          src={cardImg}
          alt="products"
          className="object-cover w-full h-[260px]"
        />
        <div className="bg-Bg flex flex-col items-end justify-center gap-2 p-4 w-full h-[150px] absolute bottom-0 left-[100%] duration-300 group-hover:left-0 ">
          <div className=" cursor-pointer flex gap-4 items-center justify-end duration-200 hover:bg-gray rounded-md w-fit px-5">
            <h4 className="font-normal text-[16px] duration-200 hover:font-bold ">
              Add to Wish List
            </h4>
            <FaHeart className="text-[17px]" />
          </div>
          <div className=" cursor-pointer flex gap-4 items-center justify-end duration-200 hover:bg-gray rounded-md w-fit px-5">
            <h4 className="font-normal text-[16px] duration-200 hover:font-bold ">
              Compare
            </h4>
            <LuGitCompare className="text-[17px]" />
          </div>
          <div className=" cursor-pointer flex gap-4 items-center justify-end duration-200 hover:bg-gray rounded-md w-fit px-5">
            <h4 className="font-normal text-[16px] duration-200 hover:font-bold ">
              Add to Cart
            </h4>
            <FaCartShopping className="text-[17px]" />
          </div>
        </div>
      </div>
      <div className=" py-4 px-3 h-full w-full flex flex-col group-hover:bg-Bg duration-300">
        <div className="w-full flex items-center justify-between">
          <h4 className="text-[20px] font-bold text-prime">
            {cardName}
          </h4>
          <h4 className="text-[16px] font-normal text-secondary">${cardPrize}</h4>
        </div>
        <div className="mt-3">
          <h4 className="text-[16px] font-normal text-secondary">{cardBrand}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
