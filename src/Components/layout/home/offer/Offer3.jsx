import React from "react";
import Img from "../../../reUseAble/Img";
import Container from "../../../reUseAble/Container";

function Offer3() {
  return (
    <Container className=" my-[20px] lg:my-[60px]  flex flex-col lg:flex-row items-center justify-between gap-4 ">
      {/* height: 580px width: 680px */}
      <Img
        src={"img/offer1.png"}
        alt={"ab 1"}
        className={"w-full h-full lg:w-[680px] lg:h-[580px] "}
      />
      <div className=" w-full  flex flex-col gap-8  ">
        {/* height: 270px width: 580px */}
        <Img
          src={"img/offer2.png"}
          alt={"ab 2"}
          className={"w-full h-full lg:w-[580px] lg:h-[270px] "}
        />
        {/* height: 270px width: 580px */}
        <Img
          src={"img/offer3.png"}
          alt={"ab 3"}
          className={"w-full h-full lg:w-[580px] lg:h-[270px] "}
        />
      </div>
    </Container>
  );
}

export default Offer3;
