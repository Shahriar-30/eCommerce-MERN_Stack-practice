import React from "react";
import Img from "../reUseAble/Img";

function NavLogo() {
  let logo = "img/logo.svg";
  let text = "Orebi";
  return (
    <>
      <Img src={logo} alt={text} className={'w-20'} />
    </>
  );
}

export default NavLogo;
