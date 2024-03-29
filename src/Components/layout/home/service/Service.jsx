import React from "react";
import Container from "../../../reUseAble/Container";
import TextImg from "../../../reUseAble/TextImg";
import { RiNumber2 } from "react-icons/ri";
import { FaUndoAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

function Service() {
  return (
    <>
      <section className="my-[10px] lg:my-[20px] ">
        <Container className="flex items-center justify-between">
          <TextImg
            Img={<RiNumber2 className="font-bold text-[15px] lg:text-[25px]" />}
            txt={"Two years warranty"}
          />
          <TextImg
            Img={<MdLocalShipping className="font-bold text-[15px] lg:text-[28px]" />}
            txt={"Free shipping"}
          />
          <TextImg
            Img={<FaUndoAlt className="font-bold text-[15px] lg:text-[22px]" />}
            txt={"Return policy in 30 days"}
          />
        </Container>
      </section>
    </>
  );
}

export default Service;
