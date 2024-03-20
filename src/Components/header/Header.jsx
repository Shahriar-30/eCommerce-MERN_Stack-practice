import React from "react";
import Container from "../layout/Container";
import Catagory from "./catagory/Catagory";
import Other from "./otherBTN/Other";

function Header() {
  return (
    <>
      <Container className={"bg-Bg"}>
        <div className="flex flex-col lg:flex-row items-center justify-between  ">
          <div className="w-full flex items-center justify-around lg:w-0  lg:justify-normal">
            <div className="w-full ">
              <Catagory />
            </div>
            <div className="w-full">
              <div className=" lg:hidden">
                <Other />
              </div>
            </div>
          </div>
          <div className="">center</div>
          <div className="hidden lg:block">
            <Other />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;
