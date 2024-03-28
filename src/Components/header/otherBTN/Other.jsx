import React, { useEffect, useRef, useState } from "react";
import CartBTN from "./Cart/CartBTN";
import CartContainer from "./Cart/CartContainer";
import ProfileBTN from "./profile/ProfileBTN";
import ProfileContainer from "./profile/ProfileContainer";
import { lovelyPopUp } from "react-lovely-popup";

function Other() {
  let cartBtn = useRef();
  let cartCon = useRef();
  const [cartModal, setCartModal] = useState(false);

  let profileBtn = useRef();
  let profileCon = useRef();
  const [profileModal, setProfileModal] = useState(false);

  lovelyPopUp({
    clickRef: cartBtn,
    toggleRef: cartCon,
    callBack: function (e) {
      setCartModal(e);
    },
  });

  lovelyPopUp({
    clickRef: profileBtn,
    toggleRef: profileCon,
    callBack: function (e) {
      setProfileModal(e);
    },
  });

  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     if (CartRef.current.contains(e.target) || profileRef.current.contains(e.target)) {
  //       if (CartRef.current.contains(e.target)) {
  //         setCartModal(true);
  //         setProfileModal(false);
  //       }else{
  //         setCartModal(false);
  //         setProfileModal(true);
  //       }
  //     } else {
  //       setCartModal(false);
  //       setProfileModal(false);
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="w-full flex relative">
        <div className="w-full">
          <div ref={cartBtn} onClick={() => setCartModal(!cartModal)}>
            <CartBTN className="w-full hover:bg-gray hover:text-white  duration-500 cursor-pointer" />
          </div>
          <div className="relative z-50" ref={cartCon}>{cartModal && <CartContainer />}</div>
        </div>
        <div className="w-full">
          <div ref={profileBtn} onClick={()=> setProfileModal(!profileModal)}>
            <ProfileBTN className="w-full hover:bg-gray hover:text-white  duration-500 cursor-pointer" />
          </div>
          <div className="relative z-50" ref={profileCon}>{profileModal && <ProfileContainer />}</div>
        </div>
      </div>
    </>
  );
}

export default Other;
