import React from "react";
import NavLogo from "./NavLogo";
import NavList from "./NavList";

function NavBar() {
  return (
    <>
      <div className="w-full relative bg-white p-3 flex justify-between items-center lg:px-[50px] ">
        <div>
          <NavLogo />
        </div>
        <div>
          <NavList />
        </div>
      </div>
    </>
  );
}

export default NavBar;
