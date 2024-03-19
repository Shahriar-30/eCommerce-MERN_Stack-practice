import React, { useEffect, useRef } from "react";
import CataBTN from "./CataBTN";
import CataContainer from "./CataContainer";
import { useState } from "react";

function Catagory() {
  let ele = useRef();
  const [cataModal, setCataModal] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (ele.current.contains(e.target)) {
        setCataModal(true);
      } else {
        setCataModal(false);
      }
    });
  }, []);

  return (
    <>
      <div className="relative" ref={ele}>
          <CataBTN />
        {cataModal && <CataContainer />}
      </div>
    </>
  );
}

export default Catagory;
