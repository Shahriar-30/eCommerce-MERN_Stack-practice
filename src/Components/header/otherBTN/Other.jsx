import React, { useEffect, useRef, useState } from "react";
import CartBTN from "./Cart/CartBTN";
import CartContainer from "./Cart/CartContainer";

function Other() {
  let CartRef = useRef();
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (CartRef.current.contains(e.target)) {
        setCartModal(true);
      } else {
        setCartModal(false);
      }
    });
  }, []);

  return (
    <>
      <div className="w-full flex relative">
        <div ref={CartRef} className="w-full">
          <CartBTN className="w-full hover:bg-gray hover:text-white  duration-500 cursor-pointer" />
          {cartModal && <CartContainer />}
        </div>
        <div className="w-full">
          <CartBTN className="w-full hover:bg-gray hover:text-white  duration-500 cursor-pointer" />
          {/* <CartContainer /> */}
        </div>
      </div>
    </>
  );
}

export default Other;
