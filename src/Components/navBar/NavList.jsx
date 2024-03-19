import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import LinkPage from "../layout/LinkPage";
import { list } from "./txt";

function NavList() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    let fixNav = () => {
      if (window.innerWidth < 639) {
        setNav(false);
      } else {
        setNav(true);
      }
      // console.log("call", window.innerWidth);
    };
    fixNav();
    window.addEventListener("resize", fixNav);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-[20px] sm:hidden">
        {nav ? (
          <FaXmark className="text-[28px]  " onClick={() => setNav(false)} />
        ) : (
          <FaBarsStaggered
            className="text-[23px] "
            onClick={() => setNav(true)}
          />
        )}
      </div>

      {nav && (
        <ul className="w-full bg-white  absolute right-0 top-[44px] p-2 flex flex-col sm:static sm:flex-row  sm:p-0 sm:gap-3  ">
          {list.map((e) => (
            <li
              key={e.id}
              className=" text-center cursor-pointer text-[rgba(0,0,0,0.68)] font-light text-[14px] hover:text-black p-1 sm:p-0 sm:text-[18px]  "
            >
              <LinkPage txt={e.name} path={e.path} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default NavList;
