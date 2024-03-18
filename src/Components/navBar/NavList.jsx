import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import LinkPage from "../layout/LinkPage";

function NavList() {
  const [nav, setNav] = useState(true);

  let list = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Contacts",
      path: "/contacts",
    },
    {
      id: 5,
      name: "Journal",
      path: "/journal",
    },
  ];

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
              className=" text-center cursor-pointer text-black font-normal text-[14px] hover:font-medium p-1 sm:p-0 sm:text-[18px]  "
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
