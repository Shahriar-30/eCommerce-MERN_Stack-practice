import React, { useEffect, useRef, useState } from "react";
import CartBTN from "./Cart/CartBTN";
import CartContainer from "./Cart/CartContainer";
import ProfileBTN from "./profile/ProfileBTN";
import ProfileContainer from "./profile/ProfileContainer";

function Other() {
  let CartRef = useRef();
  let profileRef = useRef();
  const [cartModal, setCartModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (CartRef.current.contains(e.target) || profileRef.current.contains(e.target)) {
        if (CartRef.current.contains(e.target)) {
          setCartModal(true);
          setProfileModal(false);
        }else{
          setCartModal(false);
          setProfileModal(true);
        }
      } else {
        setCartModal(false);
        setProfileModal(false);
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
        <div ref={profileRef} className="w-full">
          <ProfileBTN className="w-full hover:bg-gray hover:text-white  duration-500 cursor-pointer" />
          {profileModal && <ProfileContainer />}
        </div>
      </div>
    </>
  );
}

export default Other;
