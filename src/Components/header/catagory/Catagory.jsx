import React, { useEffect, useRef } from "react";
import CataBTN from "./CataBTN";
import CataContainer from "./CataContainer";
import { useState } from "react";
import { lovelyPopUp } from "react-lovely-popup";

function Catagory() {
  let btn = useRef();
  let toggle = useRef();
  const [cataModal, setCataModal] = useState(false);

  // useEffect(() => {
  //   let handel = (e) => {
  //     if (!ele.current.contains(e.target)) {
  //       setCataModal(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handel);
  //   return () => {
  //     document.removeEventListener("mousedown", handel);
  //   };
  // }, []);

  lovelyPopUp({
    clickRef:btn,
    toggleRef: toggle,
    callBack: function (e) {
      setCataModal(e);
    }
  })

  return (
    <>
      <div className="relative" >
        <div ref={btn} onClick={() => setCataModal(!cataModal)}>
          <CataBTN />
        </div>
        <div ref={toggle} className="relative z-50">
        {cataModal && <CataContainer />}
        </div>
      </div>
    </>
  );
}

export default Catagory;
