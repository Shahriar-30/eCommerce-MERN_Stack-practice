import React, { useEffect, useRef } from "react";
import CataBTN from "./CataBTN";
import CataContainer from "./CataContainer";
import { useState } from "react";

function Catagory() {
  let ele = useRef();
  const [cataModal, setCataModal] = useState(false);

  useEffect(() => {
    let handel = (e) => {
      if (!ele.current.contains(e.target)) {
        setCataModal(false);
      }
    };
    document.addEventListener("mousedown", handel);
    return () => {
      document.removeEventListener("mousedown", handel);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={ele}>
        <div onClick={() => setCataModal(!cataModal)}>
          <CataBTN />
        </div>
        {cataModal && <CataContainer />}
      </div>
    </>
  );
}

export default Catagory;
