import React from "react";
import NavLogo from "./NavLogo";
import NavList from "./NavList";
import Container from "../reUseAble/Container";

function NavBar() {
  return (
    <>
      <Container className="w-full relative bg-white p-3 flex justify-between items-center lg:px-[50px] ">
        <div>
          <NavLogo />
        </div>
        <div>
          <NavList />
        </div>
      </Container>
    </>
  );
}

export default NavBar;
